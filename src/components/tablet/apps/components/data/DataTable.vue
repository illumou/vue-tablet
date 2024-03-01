<template>
    <div class="w-full h-full px-8 text-text_color overflow-auto flex flex-col">
        <div class="flex flex-row justify-between items-center">
            <h1 class="text-xl select-text font-bold"> Recent Orders </h1>
            <input class=" bg-background_color_child border-border border-2 rounded-lg p-2" v-model='filtered_key' placeholder="Name" type="text">
        </div>
        <table class="w-full select-text">
            <thead class="sticky top-0 h-10  bg-background_color_child">
                <tr>
                    <th class="w-[4rem]"> ID </th>
                    <th class="w-[20rem]"> Name </th>
                    <th class="w-[20rem]"> Datum </th>
                    <th class="w-[5rem]"> Summe </th>
                    <th class="select-none"> </th>
                    <th class="select-none w-[5rem]"> </th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr v-for="entrie in displayList" class=" bg-background_color_child border-border border-b-2 h-10 max-h-10">
                    <td> {{ entrie.id }}</td>
                    <td> {{ entrie.name }} </td>
                    <td> {{ entrie.datum }}  </td>
                    <td> {{ entrie.sum }}€  </td>
                    <td> {{ entrie.tag }}  </td>
                    <td class="select-none"> <i class="fa-solid fa-minus fa-xl cursor-pointer" style="color: #ffffff;" @click="removeEntrie(entrie.id)"/> </td>
                </tr>
                <tr class=" bg-background_color_child h-10 border-t-2 border-border">
                    <td> Count: {{ countAmount }} </td>
                    <td></td>
                    <td></td>
                    <td> {{ soldAmount }}€ </td>
                    <td></td>
                    <td class="select-none"> <i class="fa-solid fa-plus fa-xl cursor-pointer" style="color: #ffffff;" @click="addEntrie()"/> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DataTable',
    props: {
        newDataEntrie: Object
    },
    data() {
        return {
            filtered_key: '',
            filtered_entries: [],
            entrie_index: 0,
            entries: [
                {   
                    'id': 1,
                    'name': 'Emma Smith',
                    'datum': '10.11.2023',
                    'sum': 99,
                    'tag': 'Success'
                },
                {
                    'id': 2,
                    'name': 'Noah Johnson',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 3,
                    'name': 'Isabella Martinez',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 4,
                    'name': 'Liam Brown',
                    'datum': '10.11.2023',
                    'sum': 901,
                    'tag': 'Success'
                },
                {
                    'id': 5,
                    'name': 'Ethan Wilson',
                    'datum': '10.11.2023',
                    'sum': 150,
                    'tag': 'Success'
                },
                {
                    'id': 5,
                    'name': 'Mia Garcia',
                    'datum': '10.11.2023',
                    'sum': 700,
                    'tag': 'Success'
                },
                {
                    'id': 6,
                    'name': 'Noah Johnson',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 7,
                    'name': 'Lucas Miller',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 8,
                    'name': 'Ava Davis',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 9,
                    'name': 'Alex Keller',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 10,
                    'name': 'Thomas Müller',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 11,
                    'name': 'Alex Teller',
                    'datum': '10.11.2023',
                    'sum': 600,
                    'tag': 'Success'
                },
                {
                    'id': 12,
                    'name': 'Jackson Harris',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Error'
                },
                {
                    'id': 13,
                    'name': 'Harper White',
                    'datum': '10.11.2023',
                    'sum': 900,
                    'tag': 'Success'
                },
                {
                    'id': 14,
                    'name': 'Grace Turner',
                    'datum': '10.11.2023',
                    'sum': 90,
                    'tag': 'Success'
                },
            ]
        }
    },
    methods: {
        removeEntrie(id) {
            const index = this.entries.findIndex(x => x.id === id)
            this.entries.splice(index, 1)
        },
        addEntrie() {
            this.$emit('update:openDialog')
        },
        addValueToList(data) {
            const index = this.entrie_index ++
            this.entries.push({
                id: index,
                name: data.name,
                datum: data.datum,
                sum: data.sum,
                tag: 'Success'
            })
        }
    },
    computed: {
        displayList() {
            if (this.filtered_key) {
                const key = this.filtered_key.toLowerCase()
                return this.entries.filter(x => x.name.toLowerCase().includes(key))
            } else {
                return this.entries;
            } 
        },
        soldAmount() {
            let amount = 0;

            if (this.filtered_key) {
                const key = this.filtered_key.toLowerCase()
                const list = this.entries.filter(x => x.name.toLowerCase().includes(key))

                list.forEach(x => {
                    if (x.tag !== 'Error') amount += x.sum
                })
                
                return amount
            } else {
                this.entries.forEach(x => {
                    if (x.tag !== 'Error') amount += x.sum
                })
                return amount
            } 
        },
        countAmount() {
            let amount = 0;

            if (this.filtered_key) {
                const key = this.filtered_key.toLowerCase()
                const list = this.entries.filter(x => x.name.toLowerCase().includes(key))

                list.forEach(x => {
                    if (x.tag !== 'Error') amount = amount + 1
                })
                
                return amount
            } else {
                this.entries.forEach(x => {
                    if (x.tag !== 'Error') {
                        amount = amount + 1
                    }
                })
                return amount
            } 
        }
    },
    beforeMount() {
        this.entrie_index = this.entries.length
    },
    watch: {
        newDataEntrie(newValue) {
            this.addValueToList(newValue)
        },
    }
}

</script>