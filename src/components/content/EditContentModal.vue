<template>
    <form @submit.prevent="onSubmit">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Изменить URL</p>
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

                <b-field label="Адрес страницы">
                    <b-input
                        v-model="url"
                        placeholder="Адрес страницы"
                        required>
                    </b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <b-button
                    label="Отмена"
                    @click="$emit('close')" />
                <b-button
                    label="Изменить контент"
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
            content: ''
        }
    },

    computed: {
        ...mapGetters({
            getById: 'content/getById'
        })
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('content/editContent', {
                id: this.id,
                title: this.title, 
                url: this.url
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
        this.title = this.getById(this.id).title
        this.url = this.getById(this.id).url
    }
}
</script>