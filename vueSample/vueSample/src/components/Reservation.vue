<script setup lang="ts">
import {ref} from 'vue'
import Card from './Card.vue'
import Badge from './Badge.vue'
import MosaicReservation from './MosaicReservation.vue';
import ReservationList from './ReservationList.vue';

const isListVisible = ref<boolean>(true)

const isDialogOpen = ref<boolean>(false)
const onClickButton = () => {
    // isListVisible.value = !isListVisible.value
    isDialogOpen.value = !isDialogOpen.value
}

const getContent = () => {
    if (isListVisible.value) {
        return ReservationList
    } else {
        return MosaicReservation
    }
}
</script>

<template>
    <div class="container">
        <Card class="menu-card">
            <span>Badges</span>
            <div class="badges">
                <Badge class="vip-badge">
                    <span>VIP</span>
                </Badge>
                <Badge class="normal-badge">
                    <span>NORMAL</span>
                </Badge>
            </div>
        </Card>
        <component :is="getContent()" />
        <button @click="onClickButton">Change</button>
        <dialog class="dialog" :open="isDialogOpen">
            <span>Dialog</span>
        </dialog>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 300px;
    width: 400px;
    margin: auto;
    background-color: aliceblue;
}
</style>