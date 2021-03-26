<template>
    <div>
        <div class="is-flex is-justify-content-space-between">
            <h1 class="title is-3">Список установленных экранов</h1>

            <b-button
                label="Добавить экран"
                type="is-primary"
                @click="isCardModalActive = true" 
            />
        </div>

        <ScreenTable @openEditModal="openEditModal"/>

        <b-modal v-model="isEditModalActive" width="500px">
            <EditScreenModal 
                @close="isEditModalActive=false"
                :id="currentId"
            />
        </b-modal>

        <b-modal v-model="isCardModalActive" width="500px">
            <AddScreenModal 
                @close="isCardModalActive=false"
            />
        </b-modal>
    </div>
</template>

<script>
import AddScreenModal from "@/components/screen/AddScreenModal"
import EditScreenModal from "@/components/screen/EditScreenModal"
import ScreenTable from "@/components/screen/ScreenTable"

export default {
    components: {AddScreenModal, EditScreenModal, ScreenTable},

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