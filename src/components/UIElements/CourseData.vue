<template>
    <div class=" aos-item" data-aos="fade-up">
        <div class="hover:scale-105 text-texttone  text-center flex flex-col xl:py-5 justify-evenly items-center border-4 border-texttone bg-fade1 p-3  xxl:space-y-3 rounded-lg  hover:cursor-pointer">
            
                <div class=" xl:py-1 flex flex-col items-center justify-center">
                    <h1 class="text-lg xl:text-4xl">{{ priceTot }} </h1>
                    <h2 class="text-sm xl:text-xl">({{ priceWeekly }} x {{duration}} horas)</h2>
                </div>
            
            <h1 class="text-sm font-bold xl:text-lg">{{ name }}</h1>
            <h1 class="hidden md:flex">{{ details }}</h1>
            <button class="bg-gradient-to-r from-main to-highlight hover:scale-105 text-texttone rounded-md border-texttone p-1 sm:p-3  ">
                <strong>
                    Aprende más!
                </strong>
            </button>
            
        </div>
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