<template>
    <div class="row window-header">
        <div class="col-2 px-0 mx-0 icons d-flex align-items-center justify-content-center gap-1">
            <fa class="transition" :icon="myIcon1" @mouseover="myIcon1 = 'fire'" @mouseout="myIcon1 = 'circle' "/>
            <fa class="transition" :icon="myIcon2" @mouseover="myIcon2 = 'fire'" @mouseout="myIcon2 = 'circle' "/>
            <fa class="transition" :icon="myIcon3" @mouseover="myIcon3 = 'fire'" @mouseout="myIcon3 = 'circle' "/>
        </div>
        <div class="col-10 text-end text-header">
            {{title}}
        </div>
    </div>
    <div class="row content overflow-hidden">
        <div class="col-12 col-md-12 col-lg-5 d-lg-flex align-items-center justify-content-center p-4">
            <p>{{content}}</p>
        </div>
        <div id="duotone" class="d-none d-lg-block col-lg-7 post-img" :style="{ 'background-image': 'url('+img+')' }">
        </div>
    </div>

    <div class="d-flex">
        <div class="col-12 col-md-12 col-lg-5 d-lg-flex align-items-center justify-content-center">
            <p class="">{{content}}</p>
        </div>
        <div id="duotone" class="col-lg-7 d-none d-md-block post-img" :style="{ 'background-image': 'url('+img+')' }">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
        img: String,
        link: String
    },
    data:function () {
        return{
            myIcon1: 'circle',
            myIcon2: 'circle',
            myIcon3: 'circle',
        }
    }
}
</script>

<style>

#duotone {
    background-size: cover;
    height: 97%;
    position: relative;
    border-bottom: #2a2a2a solid 1px;
    border-left: #2a2a2a solid 2px ;
}

#duotone::before {
    background-color: #E36414;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: darken;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
}

#duotone::after {
    background-color: #2a2a2a;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: lighten;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
}

.content {
    height: 90%;
}


.window-header {
    border-block: 2px solid #2a2a2a;
}

.transition:hover {
    color: #2a2a2a;
    transform: scale(1.3);
    transition: ease-in .2s;
}

@media (max-width: 600px) {
    #duotone{
        width: 100%;
        overflow: hidden;
    }

    .text-header{
        font-size: 12px;
    }
    
    .transition{
        font-size: 13px;
    }
    .icons{
        padding-inline-start: 2rem;
    }
}

</style>