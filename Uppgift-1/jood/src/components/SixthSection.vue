<template>
    <div class="sixth-bg">
        <div class="container p-top p-bottom">
            <div class="row">
                <div class="col-12 col-xl-7 ">
                    <div>
                        <h1 class="Roboto heading">Download the application now ! <br> to enjoy its features</h1>
                        <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="d-flex">
                        <div class="center mr-lg mr-3">
                            <img class="img-fluid mt-3" src="../assets/GooglePlay1.png" alt="">
                        </div>
                        <div class="center">
                            <img class="img-fluid mt-3" src="../assets/AppStore1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-0 col-xl-5 disableMe m-top">
                    <img class="img-fluid" src="../assets/iPhones.png" alt="">
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

    .sixth-bg {
        background-image: url('../assets/sixth-bg.png');
        width: 100%;
        background-size: cover;
        color: white; 
        background-repeat: no-repeat;
        background-position: top;
    }

    .p-top {
        padding-top: 5rem;
    }

    .m-top {
        margin-top: -3.5rem !important;
    }

    .p-bottom {
        padding-bottom: 5rem;
    }

    .disableMe {
        display: none;
    }

    @media (min-width: 576px) { 
        .p-top {
            padding-top: 6rem;
        }
    }

    @media (min-width: 1200px) {
        .disableMe {
            display: block;
        }
        .p-bottom {
            padding-bottom: 0rem;
        } 
    }
</style>