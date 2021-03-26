<template>
    <b-table
        :data="content"
        focusable
    >
        <b-table-column v-slot="props" centered>
            <b-button
                size="is-small"
                @click="onClick(props.row.id)">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
            </b-button>
        </b-table-column>

        <b-table-column field="id" label="ID" v-slot="props" centered>
            {{ props.row.id }}
        </b-table-column>

        <b-table-column field="title" label="Название контента" v-slot="props" centered>
            {{ props.row.title }}
        </b-table-column>

        <b-table-column field="url" label="Адрес контента" v-slot="props" centered>
            {{ props.row.url }}
        </b-table-column>

        <b-table-column field="del" label="Удалить контент" v-slot="props" centered>
            <b-button @click="onDelete(props.row.id)" type="is-danger">Удалить</b-button>
        </b-table-column>
    </b-table>
</template>

<script>
export default {
    computed: {
        content() {
            return this.$store.getters['content/content']
        }
    },

    methods: {
        onDelete(id) {
            this.$store.dispatch('content/deleteContent', id)
            .then(res => {
                if(res.status) {
                    this.$buefy.toast.open({
                        duration: 3000,
                        message: res.message,
                        type: 'is-success'
                    })
                }
            })
        },

        onClick(id) {
            this.$emit('openEditModal', id)
        }
    }
}
</script>