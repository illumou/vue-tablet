<template>
    <div class="w-[40%] h-[80%] bg-background_color_child border-2 border-white rounded-lg flex flex-col">
        <div class="flex-none relative h-10 flex items-center justify-center">
            <h1 class="text-text_color"> Bestellung Hinzufügen </h1>
            <div class="absolute h-full top-0 right-0 pr-4 flex items-center justify-center">
                <i class="fa-solid fa-xmark fa-lg cursor-pointer" style="color: #ffffff;" @click="closeDialog"/>
            </div>
        </div>
        <div class="flex-grow w-full h-full flex items-center justify-center">
            <form class="w-[60%] mx-auto h-full flex flex-col items-center gap-3 justify-center">
                <div class="flex flex-col w-full">
                    <label class="w-full text-text2_color text-start"> Name </label>
                    <input class="bg-background_color_child text-text_color border-border border-2 rounded-lg p-2" v-model="input_name">
                </div>
                <div class="flex flex-col w-full">
                    <label class="w-full text-text2_color text-start"> Datum </label>
                    <input class="bg-background_color_child text-text_color border-border border-2 rounded-lg p-2" type="date" v-model="input_datum">
                </div>
                <div class="flex flex-col w-full">
                    <label class="w-full text-text2_color text-start"> Summe </label>
                    <input class="bg-background_color_child text-text_color border-border border-2 rounded-lg p-2" type="number" v-model="input_sum">
                </div>
            </form>
        </div>
        <div class="w-full h-20 flex items-center justify-center">
            <button class="border-2 border-white p-2 px-5 text-text_color rounded-xl" @click="sendData"> Absenden </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogWindow',
    data() {
        return {
            input_name: null,
            input_datum: null,
            input_sum: null,
        }
    },
    methods: {
        closeDialog() {
            this.$emit('update:closeDialog');
        },
        sendData() {
            const date_list = this.input_datum.split('-')
            const parsedDate = new Date(date_list[0], date_list[1] - 1, date_list[2])
            const datum = parsedDate.toLocaleDateString()

            const data = {
                name: this.input_name,
                datum: datum,
                sum: this.input_sum,
            }
            if (data.name && data.datum && data.sum) {
                this.$emit('post:newDataEntrie', data)
                this.$emit('update:closeDialog');
            }
        }
    },
    unmounted() {
        this.input_name = null;
        this.input_date = null;
        this.input_sum = null;
    }
}

</script>