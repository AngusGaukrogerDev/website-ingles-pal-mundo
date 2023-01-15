<template>
    <div class="custom-shape-divider-top-1673798750">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
    <section class="h-screen w-screen bg-texttonehover flex  flex-col justify-around  mx-auto z-0 relative top-0 left-0">
        <div class="py-8 px-4  mx-auto max-w-screen-xl text-left lg:py-16 lg:px-12">
            <h1 class="sm:text-7xl text-3xl  py-2 text-left">Lecciones de <strong>Inglés</strong>...</h1> 
            <h1 class="sm:text-7xl text-3xl   py-2 text-left">Para <strong>Ingenieros</strong>!</h1>
            <h2 class="sm:text-2xl text-medium  py-2 text-left">¡Aprende Inglés como quieras!.</h2>
        </div>
        
    </section>
    <div class="custom-shape-divider-bottom-1673798205">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero__textstroke{
    text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
}
.custom-shape-divider-bottom-1673798205 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1673798205 svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 160px;
}

.custom-shape-divider-bottom-1673798205 .shape-fill {
    fill: #222626;
}
.custom-shape-divider-top-1673798750 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1673798750 svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 190px;
}

.custom-shape-divider-top-1673798750 .shape-fill {
    fill: #222626;
}

/** For tablet devices **/
@media (min-width: 768px) {
    .custom-shape-divider-top-1673798750 svg {
        width: calc(138% + 1.3px);
        height: 215px;
    }
}
/** For Bigger Screens**/


</style>