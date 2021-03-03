<template>
    <form 
        @submit.prevent="onSubmit" 
        class="is-flex "
    >
        <b-select placeholder="Select content" v-model="select">
            <option
                v-for="option in content"
                :value="option.url"
                :key="option.id">
                {{ option.title }}
            </option>
        </b-select>

        <b-button
        v-if="isActive"
            class="ml-3"
            native-type="submit" 
            type="is-info" 
        >Отправить</b-button>
    </form>
</template>

<script>
// import axios from 'axios';

export default {
    props: ['screenUrl'],
    
    data() {
        return ({
            select: '',
            isActive: true
        })
    },

    methods: {
        onSubmit() {
            this.isActive = false

            let data = {
                url: this.select
            }

            fetch(this.screenUrl + "/post.php", {
                method: 'POST',
                mode: "no-cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            .then(() => {
                this.isActive = true

                this.$buefy.toast.open({
                    duration: 3000,
                    message: 'Контент отправлен',
                    type: 'is-success'
                })
            })


            // axios.post(this.screenUrl + '/post.php', {
            //     url: this.select
            // })
            // .then(() => {
            //     this.isActive = false

            //     this.$buefy.toast.open({
            //         duration: 3000,
            //         message: 'Контент отправлен',
            //         type: 'is-success'
            //     })
            // }
        // )
        }
    },

    computed: {
        content() {
            return this.$store.getters['content/content']
        }
    }
}
</script>