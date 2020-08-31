<template>
    <div>
        <div class="text-wrap text-subtitle-1 mb-3">Выбрать источник</div>
        <v-select
            v-model="selected"
            append-icon="expand_more"
            :items="this.$data.items"
            outlined
            full-width
            dense
            v-on:change="handleChange"
        >
            <template v-slot:selection="itemSlot">
                <v-icon>{{itemSlot.item.icon}}</v-icon>
                <div class="ml-2 text-subtitle-2">{{itemSlot.item.text}}</div>
            </template>
            <template v-slot:item="itemSlot">
                <v-icon>{{itemSlot.item.icon}}</v-icon>
                <div class="ml-2 text-subtitle-2">{{itemSlot.item.text}}</div>
            </template>
        </v-select>
        <div>{{type}}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        props: {
            type: String,
            handleChange: Function
        },
        computed: {
            selected(){
                return this.$props.type
            }
        }
    })
    export default class TypeSelect extends Vue {
        data(){
            return {
                items: [
                    {
                        text: 'Ссылка',
                        value: 'link',
                        icon: 'link'
                    },
                    {
                        text: 'Файл',
                        value: 'file',
                        icon: 'description'
                    },
                    {
                        text: 'iFrame',
                        value: 'code',
                        icon: 'desktop_mac'
                    }
                ]
            }
        }
    }
</script>
