<template>
    <div>
        <div class="text-wrap text-subtitle-1 mb-3">Выбрать источник</div>
        <v-select
            color="grey"
            v-bind:value="value"
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
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        props: {
            value: String,
            handleChange: Function
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
                        value: 'iframe',
                        icon: 'desktop_mac'
                    }
                ]
            }
        }
    }
</script>
