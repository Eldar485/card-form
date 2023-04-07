<template>
    <div class="card" :class="{'flipped': isCardFlipped}">
        <div class="card__front">
            <div class="card__wrapper">
                <v-top></v-top>
                <v-number></v-number>
                <v-bottom></v-bottom>
            </div>
        </div>
        <div class="card__back">
            <v-back></v-back>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import VTop from "@/components/card/v-Top.vue";
import VNumber from "@/components/card/v-Number.vue";
import VBottom from "@/components/card/v-Bottom.vue";
import VBack from "@/components/card/v-Back";


export default {
    components: {VBack, VBottom, VNumber, VTop},
    computed: {
        ...mapState({
            isCardFlipped: 'isCardFlipped',
        })
    },
}
</script>

<style scoped lang="scss">

.card {
    max-width: 430px;
    height: 270px;
    margin: 3rem auto -130px auto;
    position: relative;
    transition: all 1s ease-out;
    perspective: 1000px;

    &__front, &__back {
        height: 100%;
        z-index: 2;
        width: 100%;
        box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 55);
        background-image: url("../../assets/background.jpg");
        background-size: cover;
        border-radius: 15px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        backface-visibility: hidden;
        transition: all 1s ease-out;
    }

    &__front {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    &__back {
        transform: rotate3d(0, 1, 0, 180deg);
    }

    &.flipped > .card__front {
        transform: rotate3d(0, 1, 0, -180deg);
    }

    &.flipped > .card__back {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    &__wrapper {
        font-family: "Source Code Pro", monospace;
        display: flex;
        max-height: 270px;;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 15px;
        position: relative;
        flex: 1 0;
        z-index: 4;
        height: 100%;
        text-shadow: 7px 6px 10px rgba(14, 42, 90, 80);
        user-select: none;
    }

    &__type {
        color: #ffffff;
    }
}

@media (max-width: 480px) {
    .card {
        max-width: 350px;
        max-height: 230px;
        width: 85%;
        margin: 3rem auto -110px auto;
    }
}

@media (max-width: 381px) {
    .card {
        max-width: 350px;
        max-height: 180px;
        width: 90%;
        margin: 3rem auto -90px auto;

        &__wrapper {
            padding: 20px 8px;
        }
    }
}
</style>