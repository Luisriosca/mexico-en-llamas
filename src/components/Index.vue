<template>
    <div class="container-fluid bg-custom">
        <div class="row">

            <div class="col-12 col-s-12 text-end title">
                MEXICO EN LLAMAS
            </div>

            <MovingBar/>

            <div class="box col-6 element-h400px">
                <WindowStyleSection 
                    :title="'Siguen al alza incendios forestales en México; se registran 97 en 20 estados'.toUpperCase()"
                    :content="'Los incendios forestales activos en la República Mexicana pasaron de 89 a 97 en las últimas 24 horas, en 20 estados de la República Mexicana, incluidas 15 áreas naturales protegidas.'"
                    :img="'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2022/05/14/2757761.jpg'"
                />
            </div>

            <div class="box box-grid col-6 element-h400px">
                <p>Contenido principal columna 2</p>
            </div>
            <div class="box box-grid col-7 ">
                <p>Contenido principal columna 3</p>
            </div>
            <div class="box col-5 element-h300px">
                <WindowStyleSection :title="'Hello World'" />
            </div>
        </div>
    </div>
    
</template>

<script>
    import MovingBar from './MovingBar.vue'
    import WindowStyleSection from './WindowStyleSection.vue'

    export default {
        name: 'IndexScreen',
        props: {
            color: String
        },
        components:{
            MovingBar,
            WindowStyleSection
        },
        data: function () {
        }
    }
</script>

<style>
    .title{
        font-family: 'Michroma', sans-serif;
        font-size: 4.5rem; 
    }

    .bg-custom{
        background-color: #E36414;
    }

    .box {
        background-color: #E36414;
        border: 2px solid #2a2a2a;
    }

    .box-grid {
        margin: 0;
        padding: 0;
        font-family: 'Michroma', sans-serif;
        font-size: 3rem;

        background: #E36414;
        background-image: linear-gradient( #2a2a2aee .03em, transparent .03em), linear-gradient(90deg, #2a2a2aee  .03em, transparent .03em);
        background-size: 5px 5px;
        color: #E36414;
    }

    .box-grid:hover {
        font-family: 'Michroma', sans-serif;
        background: #E36414;
        background-image: linear-gradient( #2a2a2aee .03em, transparent .03em), linear-gradient(90deg, #2a2a2aee  .03em, transparent .03em);
        background-size: 10px 10px;
        color: #2a2a2a;
        transition: linear .2s;
    }

    .element-h300px {
        height: 300px;
    }

    .element-h400px {
        height: 400px;
    }

    .element-h500px {
        height: 500px;
    }

    .accordion-button {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1px !important;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        background-color: #E36414 !important;
        border: 1.5px solid #E36414 !important;
        border-radius: 0;
        overflow-anchor: none;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-radius .15s ease;
    }
</style>