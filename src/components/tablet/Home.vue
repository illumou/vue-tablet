<template>
    <div class="tablet-home relative h-full w-full flex flex-row gap-2 p-2 items-center justify-center">
        <button v-for="element in apps" 
        class="app w-20 h-16 bg-background_color_child cursor-pointer select-none rounded text-text_color"
        :class="{'hidden': app_active}"
        @click="changeApp(element.app)">
            <p> {{ element.name }} </p>
        </button>
        <component class="tablet-app absolute w-full h-full" @update:closeApp="closeApp()"
        v-if="app_active"
        :is="app_current"/>
        <div class="tablet-home-butto absolute w-full h-20 bottom-0 flex items-center justify-center">
          <button class="w-32 h-4 bg-gray-600 rounded border-2 border-white" @click="closeApp()"/>
        </div>
    </div>
</template>

<script>
import Data from './apps/Data.vue'
import Wetter from './apps/Wetter.vue'
import Work from './apps/Work.vue'

export default {
    name: 'Home',
    components: {
        Data,
        Wetter,
        Work
    },
    data() {
        return {
            app_active: false,
            app_current: '',
            apps: [
                { id: 1, name: 'Data', app: 'Data'},
                { id: 2, name: 'Wetter', app: 'Wetter'},
                { id: 3, name: 'Calculator', app: 'Work'},
                { id: 4, name: 'ToDo', app: 'Work'},
            ]
        }
    },
    methods: {
        changeApp(component) {
            this.app_current = component
            this.app_active = true
            sessionStorage.setItem('app_current', String(component))
        },
        closeApp() {
            this.app_active = false
            this.app_current = ''
            sessionStorage.removeItem('app_current')
        },
        clearSessionStorage() {
            localStorage.clear()
        }
    },
    beforeMount() {
        if (sessionStorage.app_current) {
            this.app_active = true
            this.app_current = sessionStorage.getItem('app_current')
        }
    }
}
</script>