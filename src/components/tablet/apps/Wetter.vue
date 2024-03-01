<template>
    <div class="app-content h-full w-full bg-background_color_child flex flex-col">
        <div class="w-full flex flex-row items-center ml-6 gap-2">
            <i class="fa-solid fa-arrow-left fa-xl cursor-pointer" style="color: #ffffff;"
            @click="closeApp()"/>
            <h1 class="text-text_color text-xl"> Home </h1>
        </div>
        <main class="w-full h-full flex flex-col items-center justify-center gap-2">
            <h1 class="w-full pl-14 text-xl text-text_color"> Wochenvorschau </h1>
            <div class="flex flex-row items-center justify-center gap-2">
                <div v-for="entrie in data" class="w-40 h-96 bg-gray-200 rounded-xl flex flex-col p-2"
                :class="[getColorClass(entrie.mode)]">
                    <div class="w-full h-full bg-background_color_child rounded-lg flex flex-col items-center justify-between py-24">
                        <div>
                            <i v-if="entrie.mode === 'Sun'" class="fa-regular fa-sun fa-2xl" style="color: #ffffff;"/>
                            <i v-if="entrie.mode === 'Cloud'" class="fa-solid fa-cloud-sun fa-2xl" style="color: #ffffff;"/>
                            <i v-if="entrie.mode === 'Rain'" class="fa-solid fa-cloud-rain fa-2xl" style="color: #ffffff;"/>
                        </div>
                        <div class="text-text_color">
                            <p> {{ entrie.date }} </p>
                            <p> {{ entrie.mode }} </p>
                            <p> {{ entrie.temp }}° Celsius </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>

export default {
    name: 'Liste',
    data() {
        return {
            data: [
                {id: 1, mode: 'Sun', temp: 20, date: 'Montag'},
                {id: 2, mode: 'Cloud', temp: 15, date: 'Dienstag'},
                {id: 3, mode: 'Rain', temp: 16, date: 'Mittwoch'},
                {id: 4, mode: 'Sun', temp: 24, date: 'Donnerstag'},
                {id: 5, mode: 'Sun', temp: 20, date: 'Freitag'},
                {id: 6, mode: 'Rain', temp: 20, date: 'Samstag'},
                {id: 7, mode: 'Rain', temp: 21, date: 'Sonntag'},
            ]
        }
    },
    methods: {
        getColorClass(mode) {
            switch (mode) {
                case 'Sun': {
                    return 'bg-yellow-500'
                }
                case 'Cloud': {
                    return 'blue-gray-600'
                }
                case 'Rain': {
                    return 'bg-blue-600'
                }
            }
        },
        closeApp() {
            this.$emit('update:closeApp')
        }
    }
}
</script>