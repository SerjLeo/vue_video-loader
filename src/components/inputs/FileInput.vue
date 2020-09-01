<template>
    <div>
        <div class="text-wrap text-subtitle-1 mb-3">Загрузите файл</div>
        <vue-dropzone
                outlined
                v-bind:error="!isValid && isTouched"
                v-bind:success="isValid && isTouched"
                v-bind:value="value"
                v-on:vdropzone-success="handleInput"
                v-on:vdropzone-removed-file="handleClear"
                v-on:vdropzone-file-added="handleBlur"

                ref="myVueDropzone"
                id="dropzone"
                duplicateCheck
                :options="dropzoneOptions"
        ></vue-dropzone>
    </div>
</template>

<script lang="js">
    import vue2Dropzone from 'vue2-dropzone';
    import 'vue2-dropzone/dist/vue2Dropzone.min.css';

    export default {
        name: 'FileInput',
        props: {
            value: String,
            handleInput: Function,
            handleBlur: Function,
            handleClear: Function,
            isValid: Boolean,
            isTouched: Boolean
        },
        components: {
            vueDropzone: vue2Dropzone
        },
        data: function () {
            return {
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 450,
                    maxFilesize: 500,
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "<div class='dz_text_container'><div>Файлы формата .mp4, .avi .mov .mkv</div> <div class='dz_load-btn'>Загрузить файлы</div></div>",
                    accept: (file, done) => {
                        if(RegExp('^video\\/', 'g').test(file.type)) {
                            done()
                        } else {
                            done('Неверный формат')
                        }
                    }
                }
            }
        }
    }
</script>

<style>
    .dz_text_container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .dz_load-btn {
        padding: 10px;
        border: 1px solid #2F75EC;
        border-radius: 4px;
        color: #2F75EC;
    }
    .vue-dropzone {
        border: 1px dashed #A5B1BF;
        box-sizing: border-box;
        border-radius: 4px;
    }
</style>
