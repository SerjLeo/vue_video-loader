<template>
    <v-form>
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" sm="3">
                    <TypeSelect :type="this.$data.type" :handleChange="handleTypeChange"></TypeSelect>
                </v-col>
                <v-col cols="12" sm="5">
                    <component :is="componentName"></component>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="8">
                    <v-btn disabled elevation="0" color="primary" large type="submit">Сохранить</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {CodeInput, LinkInput, FileInput, TypeSelect} from './inputs'
    @Component({
        components: {FileInput, LinkInput, CodeInput, TypeSelect},
        computed: {
            componentName(){
                switch (this.$data.type) {
                    case 'link':
                        return 'LinkInput'
                    case 'file':
                        return 'FileInput'
                    case 'code':
                        return 'CodeInput'
                    default:
                        return 'LinkInput'
                }
            }
        },
        methods: {
            handleTypeChange(type){
                this.$data.type = type
            }
        }
    })
    export default class VideoLoader extends Vue {
        data(){
            return {
                type: 'link',
                url: ''
            }
        }
    }
</script>

<style>

</style>
