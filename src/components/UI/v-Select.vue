<template>
    <div :class="[areOptionsVisible ? styleType + '-active' : styleType]">
        <div v-click-outside="() => {this.areOptionsVisible = false}" :class="[areOptionsVisible ? styleType + '-active__title' : styleType + '__title']"
           @click="areOptionsVisible = !areOptionsVisible">{{ value || options[0] }}
            <div class="triangle" :class="{'active': areOptionsVisible}"></div>
        </div>
        <transition name="options">
            <div :class="[areOptionsVisible ? styleType + '-active__options' : styleType + '__options']" v-if="areOptionsVisible">
                <p v-for="option in options" :key="option" @click="changeOption(option)">{{ option }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'v-select',
    data() {
        return {
            areOptionsVisible: false,
        }
    },
    props: {
        options: {
            type: Array,
            default: () => [],
            required: true
        },
        value: {
            type: null,
            default: () => this.options[0]
        },
        styleType: {
            type: String,
            required: true,
            default: () => 'select'
        }
    },
    methods: {
        changeOption(option) {
            this.$emit('selectOption', option);
            this.areOptionsVisible = !this.areOptionsVisible;
        }
    }
}
</script>

<style scoped lang="scss">
.select {
    transition: 0.3s ease-in-out;
    font-family: "Source Sans Pro", sans-serif;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    height: 50px;
    border: 1px solid #ced6e0;
    color: #1a3b5d;

    &:active, &:hover, &:focus {
        border: 1px solid #3d9cff;
    }

    &__title {
        height: 50px;
        padding: 5px 15px;
        transition: .3s ease;
        margin: 10px;
    }
}
.select-active {
    font-family: "Source Sans Pro", sans-serif;
    position: relative;
    cursor: pointer;
    background: #ffffff;
    font-size: 18px;
    width: 100%;
    border: 1px solid #ced6e0;
    transition: .5s ease;
    height: 50px;

    &__title {
        height: 50px;
        padding: 5px 15px;
        color: #499bd8;
        margin: 10px;
    }

    &__options {
        border: 1px solid #ced6e0;
        border-radius: 0 0 5px 5px;
        position: absolute;
        top: 3rem;
        left: -1px;
        width: 100%;
        border-top: none;
        background: #ffffff;
        z-index: 3;
        color: #1a3b5d;

        p {
            border-top: 1px solid black;
            border-top: 1px solid #d9d9d9;
            padding: 15px 10px 10px 25px;
            transition: 0.5s ease;

            &:hover {
                color: #499bd8;
            }
        }
    }
}

.triangle {
    position: absolute;
    right: 0.2rem;
    top: 1.2rem;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #3694d7;
    transition: .8s ease;
}

.triangle.active {
    transform: rotate(-180deg);
}

.options-enter-active,
.options-leave-active {
    transition: all 0.5s ease;
}

.options-enter-from,
.options-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>