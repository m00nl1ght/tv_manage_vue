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

        <ScreenTable />

        <b-modal v-model="isCardModalActive" width="400px">
            <AddScreenModal 
                @close="isCardModalActive=false"
            />
        </b-modal>
    </div>
</template>

<script>
import AddScreenModal from "@/components/screen/AddScreenModal"
import ScreenTable from "@/components/screen/ScreenTable"

export default {
    components: {AddScreenModal, ScreenTable},

    data() {
        return {
            isCardModalActive: false
        }
    },
}
</script>