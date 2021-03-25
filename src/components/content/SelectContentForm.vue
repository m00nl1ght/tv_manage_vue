<template>
    <div>
        <form 
            @submit.prevent="onSubmit" 
            class="is-flex"
            v-if="isActive"
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
                class="ml-3"
                native-type="submit" 
                type="is-info" 
            >Отправить</b-button>
        </form>
        <span v-else>Экран недоступен</span>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['screenUrl'],
    
    data() {
        return ({
            select: '',
            isActive: false,
        })
    },

    methods: {
        onSubmit() {
            let data = {
                key: 'url',
                url: this.select,
                token: this.token
            }

            axios.post(this.screenUrl + "/post.php", data)
            .then(() => {
                this.isActive = true

                this.$buefy.toast.open({
                    duration: 3000,
                    message: 'Контент отправлен',
                    type: 'is-success'
                })
            })
        }
    },

    computed: {
        content() {
            return this.$store.getters['content/content']
        },

        token() {
            return this.$store.getters['user/screenToken']
        }
    },

    mounted() {
            let data = {
                key: 'currentUrl',
                token: this.token
            }

            axios.post(this.screenUrl + "/post.php", data)

            // fetch(this.screenUrl + "/post.php", {
            //     method: 'POST',
            //     mode: "no-cors",
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })
        
            .then(res => {
                this.isActive = true
                this.select = res.data
            })
    }
}
</script>