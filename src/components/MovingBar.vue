<template>
    <div class="marquee">
        <h3>
            Según la CONAFOR en lo que va del año, se han registrado 4,731 incendios forestales en 32 entidades federativas, en una superficie de 287,096.65 hectáreas.
        </h3>
    </div>
</template>


<script>
    export default {

    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,600&display=swap');
    .marquee {
        height: 40px;
        overflow: hidden;
        position: relative;
        background-color: #2a2a2a;
        display: flex;
        align-items: center;
    }

    .marquee > h3 {
        text-transform: uppercase;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.6rem;
        color: #E36414;
        position: absolute;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: 0;
        line-height: 50px;
        text-align: center;
        /* Starting position */
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        /* Apply animation to this element */
        -moz-animation: marquee 18s linear infinite;
        -webkit-animation: marquee 18s linear infinite;
        animation: marquee 18s linear infinite;
    }

    /* Move it (define the animation) */
    @-moz-keyframes marquee {
        0% {
            -moz-transform: translateX(100%);
        }

        100% {
            -moz-transform: translateX(-130%);
        }
    }

    @-webkit-keyframes marquee {
        0% {
            -webkit-transform: translateX(100%);
        }

        100% {
            -webkit-transform: translateX(-130%);
        }
    }

    @keyframes marquee {
        0% {
            -moz-transform: translateX(100%);
            /* Firefox bug fix */
            -webkit-transform: translateX(100%);
            /* Firefox bug fix */
            transform: translateX(100%);
        }

        100% {
            -moz-transform: translateX(-130%);
            /* Firefox bug fix */
            -webkit-transform: translateX(-130%);
            /* Firefox bug fix */
            transform: translateX(-130%);
        }
    }

</style>