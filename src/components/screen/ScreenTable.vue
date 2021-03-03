<template>
    <b-table
        :data="content"
        focusable
    >
            <b-table-column field="id" label="ID" v-slot="props" centered>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="title" label="Название экрана" v-slot="props" centered>
                {{ props.row.title }}
            </b-table-column>
            

            <b-table-column field="comment" label="Комментарий" v-slot="props" centered>
                {{ props.row.comment }}
            </b-table-column>

            <b-table-column field="del" label="Удалить экран" v-slot="props" centered>
                <b-button @click="onDelete(props.row.id)" type="is-danger">Удалить</b-button>
            </b-table-column>
    </b-table>
</template>

<script>
export default {
    computed: {
        content() {
            return this.$store.getters['screen/screens']
        }
    },

    methods: {
        onDelete(id) {
            this.$store.dispatch('screen/deleteScreen', id)
            .then(res => {
                if(res.status) {
                    this.$buefy.toast.open({
                        duration: 3000,
                        message: res.message,
                        type: 'is-success'
                    })
                }
            })
        }
    }
}
</script>