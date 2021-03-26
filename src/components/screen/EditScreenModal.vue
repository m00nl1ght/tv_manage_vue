<template>
    <form @submit.prevent="onSubmit">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Изменить экран</p>
                <button
                    type="button"
                    class="delete"
                    @click="$emit('close')"/>
            </header>

            <section class="modal-card-body">
                <b-field label="Название">
                    <b-input
                        v-model="title"
                        placeholder="Название"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Адрес экрана">
                    <b-input
                        v-model="url"
                        placeholder="Адрес экрана"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Комментарий">
                    <b-input
                        v-model="comment"
                        placeholder="Комментарий"
                        required>
                    </b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <b-button
                    label="Отмена"
                    @click="$emit('close')" />
                <b-button
                    label="Изменить экран"
                    type="is-primary" 
                    native-type="submit"/>
            </footer>
        </div>
    </form>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    props: ['id'],

    data() {
        return {
            title: '',
            url: 'http://',
            comment: ''
        }
    },

    computed: {
        ...mapGetters({
            getById: 'screen/getById'
        })
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('screen/editScreen', {
                id: this.id,
                title: this.title, 
                url: this.url, 
                comment: this.comment
            })
            .then(res => {
                if(res.status) {
                    this.$buefy.toast.open({
                        duration: 3000,
                        message: res.message,
                        type: 'is-success'
                    })

                    this.$emit('close')
                }
            })
        }
    },

    mounted() {
        const current = this.getById(this.id)
        
        this.title = current.title
        this.url = current.url
        this.comment = current.comment
    }
}
</script>