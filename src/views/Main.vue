<template>
    <div>
        <h1 class="title is-3">Отправить контент на дашборд</h1>

        <b-table
            :data="screens"
            focusable
        >
                <b-table-column field="id" label="ID" v-slot="props" centered>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="title" label="Название экрана" v-slot="props" centered>
                    {{ props.row.title }}
                </b-table-column>

                <b-table-column field="title" label="Отправить на экран" v-slot="props">
                    <SelectContentForm 
                        :screenUrl="props.row.url"
                    />
                </b-table-column>
                
        </b-table>
    </div>
</template>

<script>
import SelectContentForm from '@/components/content/SelectContentForm'

export default {
    components: {
        SelectContentForm
    },

    mounted() {
        this.$store.dispatch('screen/getScreens')
        this.$store.dispatch('content/getContent')
    },

    computed: {
        screens() {
            return this.$store.getters['screen/screens']
        }
    }
}
</script>
