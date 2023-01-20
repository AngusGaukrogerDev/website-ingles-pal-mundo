<template>
    <div class="p-1  space-y-1 xl:space-y-6 border-4 bg-gradient-to-r rounded-lg from-main to-highlight hover:scale-105 hover:cursor-pointer aos-item" data-aos="fade-right">
        <div class="  bg-fade1 p-3 xl:px-5 xl:py-3 space-y-1 xxl:space-y-6 rounded-lg  hover:cursor-pointer">
            <div class=" md:space-x-3 xl:py-8 flex flex-row items-end justify-center">
                <span class="text-lg xl:text-7xl">${{ price }}</span>
                 <span class="text-xl xl:text-3xl"> x mes</span>
            </div>
            <div class=" xl:py-8 text-md xl:text-3xl font-bold flex justify-center">
                {{ title }}
            </div>
            <div class=" text-base xl:text-lg text-center xl:py-8 flex justify-center">
                {{ includes }}
            </div>
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