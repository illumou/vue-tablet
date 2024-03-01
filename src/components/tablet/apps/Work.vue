<template>
    <div class="app-content h-full w-full bg-background_color_child flex items-center justify-center text-text_color">
        <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl blur-lg"/>
            <div class="relative w-60 h-16 bg-background_color_main rounded-xl p-4 flex flex-row items-center justify-center">
                <h1 class="text-2xl"> App in work </h1>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Work',
    data() {
        return {
            data: true
        }
    },
    methods: {
        
    }
}
</script>