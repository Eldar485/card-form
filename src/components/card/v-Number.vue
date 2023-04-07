<template>
    <label class="number">
        <span
            v-for="(n, $index) in cardMask"
            :key="$index">
            <transition name="slide-fade-up">
                <span
                    v-if="$index > 4 && $index < 14 && cardNumber.length > $index && n.trim() !== ''"
                >*</span>
                <span
                    :class="{ '-active' : n.trim() === '' }"
                    :key="$index" v-else-if="cardNumber.length > $index">
                    {{ cardNumber[$index] }}
                </span>
                <span :class="{ '-active' : n.trim() === '' }"
                      v-else
                      :key="$index + 1"
                >{{ n }}</span>
            </transition>
        </span>
    </label>
</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            cardNumber: 'cardNumber',
            cardMask: 'cardMask',
        })
    },
}
</script>

<style scoped lang="scss">
.number {
    color: #ffffff;
    font-size: 27px;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    padding: 10px 15px;
    display: block;
    width: 100%;

    span {
        margin: 0 0.5px;
        display: inline-block;
    }

}
.-active {
    display: inline-block;
    width: 25px !important;
}

@media (max-width: 480px) {
    .number {
        font-size: 20px;
        margin: 0 0.1px;
    }
    .-active {
        width: 18px !important;
    }
}
@media (max-width: 410px) {
    .number {
        font-size: 20px;
    }
    .-active {
        width: 12px !important;
    }
}
@media (max-width: 381px) {
    .number {
        font-size: 18px;
    }
    .-active {
        width: 5px !important;
    }
}
</style>