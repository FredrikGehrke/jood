<template>
    <div class="my-margin">

        <div class="container pt-5 mt-4">
            <div class="row row-cols-1">
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <div class="col-12 text-center">
                        <h1 class="Roboto heading">Application Screens</h1>
                    </div>
                    <div class="col-12 text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industry's</p>
                    </div>
                </div>
                <div class="loop owl-carousel bgPhone" id="screenDIV">                                      
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../assets/Screen.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../assets/Screen.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../assets/Screen.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../assets/Screen.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../assets/Screen.png" alt="">
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

    .my-margin {
        height: 28rem;
    }

    @media (min-width: 768px) { 
        .my-margin {
            height: 40rem;
        }
    }

    @media (min-width: 1200px) { 
        .my-margin {
                height: 42rem;
        }
    }

</style>