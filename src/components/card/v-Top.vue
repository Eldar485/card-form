<template>
    <div class="top">
        <img
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            alt="art">
        <div class="image">
            <transition name="slide-fade-up">
                <img
                    v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/'
                                    + getCardType() + '.png'"
                    v-if="getCardType()"
                    v-bind:key="getCardType()"
                    alt="">
            </transition>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    methods: {
        getCardType() {
            let number = this.cardNumber;
            let re = new RegExp("^4");
            if (number.match(re) != null) return "visa";

            re = new RegExp("^(34|37)");
            if (number.match(re) != null) return "amex";

            re = new RegExp("^5[1-5]");
            if (number.match(re) != null) return "mastercard";

            re = new RegExp("^6011");
            if (number.match(re) != null) return "discover";

            re = new RegExp('^9792')
            if (number.match(re) != null) return 'troy'

            return "visa";
        }
    },
    computed: {
        ...mapState({
            cardNumber: 'cardNumber'
        })
    }
}
</script>

<style scoped lang="scss">
.top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 10px;
    position: relative;

    img {
        max-width: 60px;
    }
}

.image {
    object-fit: contain;
    position: relative;
    display: block;
    max-width: 80px;

    img {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .top {
        img {
            max-width: 50px;
        }
    }
    .image {
        img {
            max-width: 60px;
        }
    }
}
</style>