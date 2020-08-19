<template>
    <div>
        <div class="container p-top">
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <img class="" src="../assets/ec-logo-mono.png" alt="">
                </div>
                <div class="col disableOnPhone">
                    <img class="ml-3" src="../assets/ec-logo-mono.png" alt="">
                </div>
                <div class="col disableOnPhone">
                    <img class="ml-3" src="../assets/ec-logo-mono.png" alt="">
                </div>
                <div class="col disableOnPhone">
                    <img class="ml-3" src="../assets/ec-logo-mono.png" alt="">
                </div>
            </div>
        </div>
        <div class="container mt-5 p-bottom">
            <div class="row -m-top">
                <div class="col-lg-6 mt-5 disableMe">
                    <img class="img-fluid" src="../assets/AboutUs.png" alt="">
                </div>
                <div class="col-lg-6 m-top">
                    <div>
                        <button type="button" class="btn aboutUsBtn">About Us</button>
                    </div>
                    <div>
                        <h1 class="Roboto heading">Easy To Search Your Items By This App</h1>
                        <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum </p>
                    </div>
                    <div class="d-flex ">
                        <div class="center mr-lg mr-3">
                            <img class="img-fluid mt-3" src="../assets/GooglePlay2.png" alt="">
                        </div>
                        <div class="center">
                            <img class="img-fluid mt-3" src="../assets/AppStore2.png" alt="">
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

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .-m-top {
        margin-top: -4rem;
    }

    .p-bottom {
        padding-bottom: 3rem;
    }

    .disableMe {
        display: none;
    }

    .disableOnPhone {
        display: none;
    }

    .m-top{
        margin-top: 8rem;
    } 

    @media (min-width: 576px) { 

        .p-bottom {
            padding-bottom: 8rem;
        }

        .center {
            display: block;
        }
    }

    @media (min-width: 992px) {
        .disableOnPhone {
            display: block;
        }
        .disableMe {
            display: block;
        }
        .-m-top {
            margin-top: 0rem;
    }
    }

    @media (min-width: 1200px) {
        .p-top {
            padding-top: 5rem;
        }
    }

</style>