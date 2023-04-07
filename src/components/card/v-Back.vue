<template>
    <div class="back">
        <div class="back__wrapper">
            <div class="back__line"></div>
            <div class="back__cvv">
                <label class="back__label">CVV</label>
                <div class="back__input">{{ hiddenCvv }}</div>
            </div>
            <div class="back__image">
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
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            cardNumber: 'cardNumber',
        }),
        ...mapGetters({
            hiddenCvv: 'hiddenCvv'
        })
    },
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
    }
}
</script>

<style scoped lang="scss">
.back {
    box-sizing: border-box;
    position: relative;

    &__wrapper {
        font-family: "Source Code Pro", monospace;
        max-height: 270px;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px 0;
        position: relative;
        flex: 1 0;
        z-index: 4;
        height: 100%;
        user-select: none;
    }

    &__cvv {
        margin: 1rem 15px;
    }

    &__label {
        font-size: 16px;
        color: #ffffff;
        display: block;
        text-align: right;
        margin-bottom: 5px;
    }

    &__input {
        height: 45px;
        background-color: #ffffff;
        border-radius: 5px;
        text-align: right;
        padding: 12px;
    }

    &__line {
        background-color: #000000;
        opacity: 0.9;
        height: 50px;
    }
    &__image {
        margin-top: 2.1rem;
        margin-right: 15px;
        object-fit: contain;
        position: relative;
        display: flex;

        justify-content: flex-end;

        img {
            align-self: flex-end;
            max-width: 80px;
        }
    }
}

@media (max-width: 480px) {
    .back {
        &__line {
            height: 25px;
        }
        &__label {
            font-size: 12px;
            margin-bottom: 3px;
        }

        &__cvv {
            margin: 2rem 15px;
        }

        &__input {
            height: 35px;
            background-color: #ffffff;
            border-radius: 5px;
            text-align: right;
            padding: 10px;
        }
        &__image {
            margin-top: 2.1rem;

            img {
                max-width: 70px;
            }
        }
    }
}

@media (max-width: 381px) {
    .back {
        &__label {
            font-size: 12px;
            margin-bottom: 3px;
        }

        &__cvv {
            margin: 0.5rem 10px;
        }

        &__image {
            margin-top: 1.1rem;

            img {
                max-width: 60px;
            }
        }
    }
}
</style>