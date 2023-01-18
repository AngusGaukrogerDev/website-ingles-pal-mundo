<template>
    <div class="p-1 space-y-1 xl:space-y-6 border-4 bg-gradient-to-r from-main to-highlight hover:scale-105 hover:cursor-pointer">
        <div class="  bg-fade1 p-3 space-y-1 xl:space-y-6  hover:cursor-pointer">
            <div class="text-2xl xl:text-8xl md:space-x-3 flex flex-row items-end justify-center">
                ${{ price }} <span class="text-lg">x mes</span>
            </div>
            <div class="text-md xl:text-3xl flex justify-center">
                {{ title }}
            </div>
            <div class=" text-base xl:text-2xl text-center flex justify-center">
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