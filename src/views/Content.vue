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

        <ContentTable @openEditModal="openEditModal"/>

        <b-modal v-model="isCardModalActive" width="500px">
            <AddContentModal 
                @close="isCardModalActive=false"
            />
        </b-modal>
        <b-modal v-model="isEditModalActive" width="500px">
            <EditContentModal 
                @close="isEditModalActive=false"
                :id="currentId"
            />
        </b-modal>
    </div>
</template>

<script>
import ContentTable from "@/components/content/ContentTable"
import AddContentModal from "@/components/content/AddContentModal"
import EditContentModal from "@/components/content/EditContentModal"

export default {
    components: {ContentTable, AddContentModal, EditContentModal},

    data() {
        return {
            isCardModalActive: false,
            isEditModalActive: false,
            currentId: ''
        }
    },

    methods: {
        openEditModal(id) {
            this.isEditModalActive = true
            this.currentId = id
        }
    }
}
</script>

<style scoped>
    .content-block {
        border-bottom: 1px solid #000;
        margin: 0;
        padding: 10px 0;
    }
</style>