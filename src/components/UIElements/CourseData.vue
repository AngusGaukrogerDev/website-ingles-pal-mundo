<template>
    <div class="text-texttone hover:scale-105 text-center flex flex-col justify-evenly items-center border-4 border-texttone bg-fade1 p-3 xl:py-2 space-y-1 xxl:space-y-3 rounded-lg  hover:cursor-pointer">
        <div class=" xl:py-1 flex flex-col items-center justify-center">
            <h1 class="text-lg xl:text-5xl">${{ priceTot }} </h1>
            <h2 class="text-xl xl:text-2xl">(${{ priceWeekly }} x {{duration}} horas)</h2>
        </div>
        
        <h1 class="text-lg font-bold xl:text-3xl">{{ name }}</h1>
        <h1>{{ details }}</h1>

    </div>
</template>

<script setup>

    let props = defineProps({
        name: String,
        priceTot: Number,
        priceWeekly: Number,
        duration: Number,
        details: String,
    });
</script>

<style lang="scss" scoped>

</style>