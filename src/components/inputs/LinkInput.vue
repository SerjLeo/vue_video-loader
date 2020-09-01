<template>
    <div>
        <div class="text-wrap text-subtitle-1 mb-3">Вставить ссылку</div>
        <v-text-field
                v-bind:error="!isValid && isTouched"
                v-bind:success="isValid && isTouched"
                v-bind:value="value"
                v-on:input="handleInput"
                v-on:blur="handleBlur"
                color="grey"
                class="custom_success"
                dense
                outlined
        >
            <template v-slot:append>
                <v-icon class="mr-2" v-if="!isValid && isTouched" color="#E64A19">remove_circle</v-icon>
                <v-icon class="mr-2" v-else-if="isValid && isTouched" color="#2F75EC">check_circle</v-icon>
            </template>
        </v-text-field>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component({
        props: {
            value: String,
            handleInput: Function,
            handleBlur: Function,
            isValid: Boolean,
            isTouched: Boolean
        }
    })
    export default class LinkInput extends Vue {
        data(){
            return {
                validation: [
                    (data: any) => {
                        if(typeof data === 'string') {
                            return 'Data should be number'
                        }
                        return true
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .custom_success.success--text >>> .v-input__slot {
        background-color: rgba(47, 117, 236, 0.04);
    }
    .custom_success.error--text {
        color: #E64A19 !important
    }
    .custom_success.success--text {
        color: #2F75EC !important
    }
</style>
