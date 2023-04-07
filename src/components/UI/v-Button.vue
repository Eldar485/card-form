<template>
    <button :class="styleType">
        <slot></slot>
    </button>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: 'v-button',
    props: {
        styleType: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped lang="scss">
.btn {
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 3px 10px 20px 0 rgba(35, 100, 210, 30);
    width: 100%;
    height: 55px;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    padding: 10px 15px;
    background: #2364d2;
    color: #ffffff;
}

</style>