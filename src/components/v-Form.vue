<template>
    <form class="form">
        <v-input class="form__input" input-id="cardNumber" :mask="cardMask" style-type="input-text"
                 label="Card Number"
                 type="tel" :value="cardNumber" @modelValue="setCardNumber"></v-input>
        <v-input class="form__input" input-id="cardHolder" style-type="input-text" label="Card Holder"
                 type="text" :value="cardHolder" @modelValue="setCardHolder"></v-input>
        <div class="form__row">
            <div class="form__date">
                <div class="form__label">Expiration Date</div>
                <div class="form__selects">
                    <v-select class="form__input-three"
                              @selectOption="selectMonth"
                              :value="selectedMonth"
                              :options="months"
                              style-type="select">
                    </v-select>
                    <v-select class="form__input-three"
                              @selectOption="selectYear"
                              :value="selectedYear"
                              :options="years"
                              style-type="select">
                    </v-select>
                </div>
            </div>
            <div class="form__cvv">
                <v-input :mask="cvvMask" class="form__input-three" input-id="CVV" style-type="input-text"
                         label="CVV"
                         type="text" @focusin="focusInput" @focusout="blurInput" :value="cvv" @modelValue="setCvv"></v-input>
            </div>
        </div>
        <v-button class="form__btn" style-type="btn" @click="sendForm($event)">Submit</v-button>
    </form>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import VInput from "@/components/UI/v-Input.vue";
import VSelect from "@/components/UI/v-Select.vue";
import VButton from "@/components/UI/v-Button.vue";

export default {
    components: {VButton, VSelect, VInput},
    methods: {
        ...mapMutations({
            setCardNumber: 'setCardNumber',
            setCardHolder: 'setCardHolder',
            selectMonth: 'selectMonth',
            selectYear: 'selectYear',
            setCvv: 'setCvv',
            setCardFlipped: 'setCardFlipped',
            setNotifications: 'setNotifications'
        }),
        focusInput () {
            this.setCardFlipped(true);
        },
        blurInput() {
            this.setCardFlipped(false);
        },
        sendForm(event) {
            event.preventDefault()
            if (this.cardNumber.replace(/\D/g,'').length !== 16) {
                this.setNotifications({
                    title: 'Ошибка',
                    description: 'Некорректный номер карты',
                    type: 'error'
                })
                return;
            }
            if (this.cardHolder === '') {
                this.setNotifications({
                    title: 'Ошибка',
                    description: 'Некорректный владелец карты',
                    type: 'error'
                })
                return;
            }
            if (this.cvv.length !== 4) {
                this.setNotifications({
                    title: 'Ошибка',
                    description: 'Некорректный CVV',
                    type: 'error'
                })
                return;
            }
            this.setNotifications({
                title: 'Успешно',
                description: 'Карта добавлена',
                type: 'success'
            })
        }
    },
    computed: {
        ...mapState({
            cardNumber: 'cardNumber',
            cardHolder: 'cardHolder',
            cardMask: 'cardMask',
            selectedMonth: 'selectedMonth',
            selectedYear: 'selectedYear',
            cvvMask: 'cvvMask',
            cvv: 'cvv',
            months: 'months',
            years: 'years'
        }),
    }
}
</script>

<style scoped lang="scss">
.form {
    max-width: 570px;
    margin: 0 auto;
    padding: 180px 35px 35px 35px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 10);

    &__input {
        margin: 1.5rem 0;

        &-three {
            max-width: 150px;
        }
    }

    &__row {
        display: flex;
    }

    &__selects {
        display: flex;
        flex-direction: row;
    }

    &__label {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 500;
        width: 100%;
        color: #1a3b5d;
        min-height: 16px;
    }

    &__date {
        max-width: 315px;
        width: 100%;
        margin-right: 35px;

        div:first-child {
            margin-right: 15px;
        }
    }

    &__cvv {
        max-width: 150px;
        width: 100%;
    }

    &__btn {
        margin-top: 2rem;
    }
}

@media (max-width: 480px) {
    .form {
        padding: 150px 35px 35px 35px;

        &__row {
            flex-wrap: wrap;
        }

        &__date {
            max-width: 315px;
            margin-right: 0;
        }

        &__input-three {
            flex: 1 0;
            max-width: inherit;
        }

        &__cvv {
            margin-top: 1rem;
            max-width: inherit;
            width: 100%;
        }
    }
}

@media (max-width: 381px) {
    .form {
        padding: 110px 35px 35px 35px;
    }
}
</style>