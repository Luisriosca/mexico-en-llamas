<template>

        <div class="box col-6 element-h300px">
            <p>Contenido principal columna 1</p>
        </div>
        <div class="box box-grid col-6 element-h300px">
            <p>Contenido principal columna 2</p>
        </div>
        <div class="box box-grid col-8 ">
            <p>Contenido principal columna 3</p>
        </div>
        <div class="box col-4 ">
            <p>Contenido principal columna 4</p>
        </div>

        <div class="box col-12">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the first item's
                            accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the second item's
                            accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the third item's
                            accordion body. Nothing more exciting happening here in terms of content, but just
                            filling up the space to make it look, at least at first glance, a bit more
                            representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'IndexScreen',
        props: {
            color: String
        }
    }
</script>

<style>
    .box {
        background-color: #E36414;
        border: 1.5px solid #2a2a2a;
    }

    .box-grid {
        margin: 0;
        padding: 0;
        font-family: 'Michroma', sans-serif;
        font-size: 3rem;
        width: 100%;

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