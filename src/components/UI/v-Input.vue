<template>
    <div :class="styleType">
        <label :for="inputId">{{ label }}</label>
        <input :id="inputId" v-mask="mask" v-if="mask" :type="type" :value="value" @input="updateInput">
        <input :id="inputId" v-if="!mask" :type="type" :value="value" @input="updateInput">
    </div>
</template>

<script>
import {defineComponent} from "vue";
import {mask} from 'vue-the-mask'

export default defineComponent({
    name: 'v-input',
    directives: {mask},
    components: {},
    props: {
        mask: {
            type: String,
            required: false
        },
        value: [String, Number, Object],
        styleType: {
            type: String,
            required: true,
            default: () => 'input-text'
        },
        label: {
            type: String
        },
        type: {
            type: String
        },
        inputId: {
            type: String
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('modelValue', event.target.value.trim())
        }
    }
});
</script>

<style scoped lang="scss">
.input-text {
    display: flex;
    flex-direction: column;
    font-family: "Source Sans Pro", sans-serif;

    label {
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 500;
        width: 100%;
        color: #1a3b5d;
        min-height: 16px;
    }
    input {
        transition: 0.3s ease-in-out;
        width: 100%;
        height: 50px;
        font-size: 18px;
        border-radius: 5px;
        box-shadow: none;
        border: 1px solid #ced6e0;
        padding: 5px 15px;
        background: none;
        outline: none;
        color: #1a3b5d;

        &:active, &:hover, &:focus {
            border: 1px solid #3d9cff;
        }
    }
}
</style>