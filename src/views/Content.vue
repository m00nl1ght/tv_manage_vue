<template>
    <div>
        <div class="is-flex is-justify-content-space-between content-block">
            <h1 class="title is-3 m-0">Список доступных дашбордов</h1>

            <b-button
                label="Добавить URL"
                type="is-primary"
                @click="isCardModalActive = true" 
            />
        </div>

        <ContentTable />

        <b-modal v-model="isCardModalActive" width="400px">
            <AddContentModal 
                @close="isCardModalActive=false"
            />
        </b-modal>
    </div>
</template>

<script>
import ContentTable from "@/components/content/ContentTable"
import AddContentModal from "@/components/content/AddContentModal"

export default {
    components: {ContentTable, AddContentModal},

    data() {
        return {
            isCardModalActive: false
        }
    },
}
</script>

<style scoped>
    .content-block {
        border-bottom: 1px solid #000;
        margin: 0;
        padding: 10px 0;
    }
</style>