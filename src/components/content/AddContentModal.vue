<template>
    <form @submit.prevent="onSubmit">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Добавить URL</p>
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
                    label="Сохранить контент"
                    type="is-primary" 
                    native-type="submit"/>
            </footer>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            url: 'http://'
        }
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('content/addContent', {
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
    }
}
</script>