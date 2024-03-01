<template>
    <div class="app-content h-full w-full bg-background_color_child flex flex-col">
        <div class="z-10 absolute w-full h-full flex items-center justify-center backdrop-blur-sm"
        v-if="dialog_fenster_bool">
            <DialogWindow @update:closeDialog="closeDialog" @post:newDataEntrie="addDataEntrie"/>
        </div>
        <div class="w-full flex flex-row items-center ml-6 gap-2">
            <i class="fa-solid fa-arrow-left fa-xl cursor-pointer" style="color: #ffffff;"
            @click="closeApp()"/>
            <h1 class="text-text_color text-xl"> Home </h1>
        </div>
        <main class="w-full h-full flex pb-[6rem]">
            <component is="DataTable" @update:openDialog="openDialog" :newDataEntrie="newDataEntrie"/>
        </main>
    </div>
</template>

<script>
import DataTable from './components/liste/DataTable.vue'
import DialogWindow from './components/liste/DialogWindow.vue'

export default {
    name: 'Liste',
    components: {
        DataTable,
        DialogWindow
    },
    data() {
        return {
            dialog_fenster_bool: false,
            newDataEntrie: null,
        }
    },
    methods: {
        closeApp() {
            this.$emit('update:closeApp')
        },
        openDialog() {
            this.dialog_fenster_bool = true
        },
        closeDialog() {
            this.dialog_fenster_bool = false
        },
        addDataEntrie(data) {
            this.newDataEntrie = data
        }
    }
}
</script>