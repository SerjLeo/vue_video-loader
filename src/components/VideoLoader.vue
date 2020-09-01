<template>
    <v-form @submit.prevent="handleFormSubmit">
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" sm="3" md="2">
                    <TypeSelect v-model="type" :handleChange="handleTypeChange"></TypeSelect>
                </v-col>
                <v-col cols="12" sm="5" md="4">
                    <component
                            :is="componentName"
                            :isValid="!$v.$invalid"
                            :isTouched="$v.url.$dirty"
                            v-model.trim="url"
                            :handleInput="handleInputChange"
                            :handleBlur="handleInputBlur"
                            :handleClear="handleClear"
                    />
                </v-col>
            </v-row>
            <v-row justify="center" v-if="loading">
                <v-col cols="12" sm="8" md="6">
                    <v-progress-circular></v-progress-circular>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-btn
                        v-bind:disabled="$v.$invalid || loading"
                        elevation="0"
                        color="#2852B9"
                        v-bind:dark="!$v.$invalid && !loading"
                        large
                        type="submit"
                    >Сохранить</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {CodeInput, LinkInput, FileInput, TypeSelect} from './inputs'
    import {required} from "vuelidate/lib/validators";

    function customValidator(this: any): boolean {
        switch (this.$data.type) {
            case 'link':
                return RegExp('^https*:\\/\\/\\w+\\.(com|ru|org|net)\\S*$', 'gm').test(this.$data.url)
            case 'iframe':
                return RegExp('<iframe.+src="\\w+".+><\\/iframe>', 'gm').test(this.$data.url)
            default:
                return true
        }
    }

    @Component({
        components: {FileInput, LinkInput, CodeInput, TypeSelect},
        computed: {
            componentName(){
                switch (this.$data.type) {
                    case 'link':
                        return 'LinkInput'
                    case 'file':
                        return 'FileInput'
                    case 'iframe':
                        return 'CodeInput'
                    default:
                        return 'LinkInput'
                }
            }
        },
        methods: {
            handleTypeChange(type){
                this.$data.type = type
                this.$data.url = ''
                this.$v.url.$reset()
            },
            handleClear() {
                this.$data.url = ''
                this.$v.url.$reset()
            },
            handleInputChange(url){
                if(this.$data.type === 'file') {
                    this.$v.$touch()
                    this.$data.url = JSON.stringify(url)
                } else {
                    this.$data.url = url
                }
            },
            handleInputBlur() {
                this.$v.$touch()
            },
            async handleFormSubmit() {
                try {
                    this.$data.loading = true
                    const res = await this.$http.post('https://httpbin.org/post', JSON.stringify({
                        type: this.$data.type,
                        url: this.$data.url
                    }))
                    console.log(res)
                    setTimeout(() => {
                        this.$data.loading = false
                    }, 2000)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        validations: {
            url: {
                required,
                customValidator
            }
        }
    })
    export default class VideoLoader extends Vue {
        data(){
            return {
                type: 'link',
                url: '',
                loading: false
            }
        }
    }
</script>
