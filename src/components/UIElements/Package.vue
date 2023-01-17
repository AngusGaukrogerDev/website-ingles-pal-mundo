<template>
    <div class="  bg-fade1  ">
        <div class="text-8xl  flex flex-row items-end justify-center">
            {{ price }} <span class="text-lg">cada mes</span>
        </div>
        <div class="text-3xl flex justify-center">
            {{ title }}
        </div>
        <div class="text-2xl text-center flex justify-center">
            {{ includes }}
        </div>
    </div>
</template>

<script setup>

let props = defineProps({
    price: Number,
    title: String,
    includes: String,
});
</script>

<style lang="scss" scoped>

</style>