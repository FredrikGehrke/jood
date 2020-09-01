<template>
    <div>

        <div class="container pl-0 pr-0 pb-5">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex flex-row justify-content-center">
                        <h1 class="pr-2 font-weight-bold">SHOP BY</h1>
                        <h1 class="my-blue-color font-weight-bold">CATEGORY</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="../assets/wave.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center pt-3">
                        <p>We always try to give you the best product within a fast and reliable way</p>
                    </div>
                </div>
                
                <div class="grid m-auto">
                    <div class="grid-item mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Men</p>
                        </div>
                    </div>
                    <div class="grid-item grid-item2 mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Women</p>
                        </div>
                    </div>
                    <div class="grid-item grid-item3 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Kids</p>
                        </div>
                    </div>
                    <div class="grid-item grid-item3 my-margin d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Shoes</p>
                        </div>
                    </div>
                    <div class="grid-item grid-item1 my-margin ml-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Hats</p>
                        </div>                       
                    </div>
                    <div class="grid-item ml-2 grid-item2 mr-2 mt-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-0 pl-3 pt-1">Sunglasses</p>
                            <p class="mb-2 pl-3 white">18 products</p>
                        </div>
                    </div>
                    <div class="grid-item mt-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Watches</p>
                        </div>
                    </div>
                </div>

                <div class="grid2 m-auto">
                    <div class="grid-item mr-2 d-flex align-items-end ">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Men</p>
                        </div>
                    </div>
                    <div class="grid-item mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Women</p>
                        </div>
                    </div>
                    <div class="grid-item mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Kids</p>
                        </div>
                    </div>
                    <div class="grid-item mr-2 d-flex align-items-end mb-2">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Hats</p>
                        </div>
                    </div>
                    <div class="grid-item mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Shoes</p>
                        </div>
                    </div>
                    <div class="grid-item mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Watches</p>
                        </div>
                    </div>
                    <div class="grid-item grid-itemSM mr-2 d-flex align-items-end">
                        <div class="bg-color">
                            <p class="font-weight-bold my-blue-color mb-1 pl-3 pt-1">Sunglasses</p>
                            <p class="mb-2 pl-3 white">18 products</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.bg-color {
    background-color: #0E153D;
    width: 48%;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
}

.my-margin {
    margin-top: -12rem;
}

/* ---- grid ---- */

.grid {
    max-width: 1020px;
    display:none;
}

.grid2 {
    max-width: 417px;
}

/* ---- grid-item ---- */

.grid-item {
    width: 200px;
    height: 200px;
    float: left;
    background: #CCCCCC;
    border-radius: 5px;
}

.grid-item1 { width: 200px; height: 190px; }
.grid-item2 { width: 400px; height: 200px; }
.grid-itemSM { width: 408px; height: 200px; }
.grid-item3 { width: 400px; height: 400px; }
.grid-item--width4 { width: 640px; }



@media (min-width: 576px) {  }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (min-width: 1200px) { 

    .grid {
        display: block;
    } 

    .grid2 {
        display: none;
    }
}

</style>