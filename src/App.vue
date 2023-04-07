<template>
    <div class="app">
        <v-notification></v-notification>
        <div class="wrapper">
            <v-card></v-card>
            <v-form></v-form>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import VForm from "@/components/v-Form.vue";
import VCard from "@/components/card/v-Card.vue";
import VNotification from "@/components/UI/v-Notification.vue";

export default defineComponent({
    name: 'App',
    components: {VNotification, VCard, VForm},
});
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

p, span, div {
    margin: 0;
    padding: 0;
}

body {
    background-color: #ddeefc;
}

.wrapper {
    margin: 0 auto;
    max-width: 1110px;
}

.slide-fade-up-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
}

.slide-fade-up-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
}

.slide-fade-up-enter-from {
    opacity: 0;
    transform: translateY(15px);
    pointer-events: none;
}

.slide-fade-up-leave-to {
    opacity: 0;
    transform: translateY(-15px);
    pointer-events: none;
}



.slide-fade-right-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
}
.slide-fade-right-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
}
.slide-fade-right-enter-from {
    opacity: 0;
    transform: translateX(10px) rotate(45deg);
    pointer-events: none;
}
.slide-fade-right-leave-to {
    opacity: 0;
    transform: translateX(-10px) rotate(45deg);
    pointer-events: none;
}
</style>
