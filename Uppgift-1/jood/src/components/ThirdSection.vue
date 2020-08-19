<template>
    <div class="third-section-bg p-top-lg p-bottom">
        <div class="container p-bottom text-dark">
            <div class="row -m-top">
                <div class="col-lg-7 m-top">
                    <div>
                        <button type="button" class="btn aboutUsBtn">Features</button>
                    </div>
                    <div>
                        <h1 class="Roboto heading">Easy To Search Your Items <br> By This App</h1>
                        <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    </div>
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-12 col-md-6 pl-0">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="pl-0 pr-2 bd-highlight">
                                        <img src="../assets/icon-4.png" alt="">
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div class="my-small-heading text-left">Ease of search
                                            <p class="my-p">Lorem Ipsum is simply dummy text of the printing industry. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 pl-0">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="pl-0 pr-2 bd-highlight">
                                        <img src="../assets/icon-2.png" alt="">
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div class="my-small-heading text-left">Manage your ads
                                            <p class="my-p">Lorem Ipsum is simply dummy text of the printing industry. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 pl-0">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="pl-0 pr-2 bd-highlight">
                                        <img src="../assets/icon-1.png" alt="">
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div class="my-small-heading text-left">Ease main
                                            <p class="my-p">Lorem Ipsum is simply dummy text of the printing industry. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 pl-0">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="pl-0 pr-2 bd-highlight">
                                        <img src="../assets/icon-3.png" alt="">
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div class="my-small-heading text-left">Ongoing support
                                            <p class="my-p">Lorem Ipsum is simply dummy text of the printing industry. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-5">
                    <img class="img-fluid" src="../assets/Mobile-1.png" alt="">
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

    #mobile-img {
        width: 120%;
    }

    .third-section-bg {
        background-image: url('../assets/greyBG.png');
        width: 100%;
        background-size: cover;
        color: white; 
        background-repeat: no-repeat;
        background-position: top;
    }

    .p-bottom {
        padding-bottom: 3rem;
    }

    .my-small-heading {
        font-weight: 600;
        font-size: 16px;
        margin-top: -1.0rem;
    }

    .my-p {
        font-weight: 100;
        font-size: 12px;
        width: 110%;
    }

    @media (min-width: 576px) { 
        .p-top-lg {
            padding-top: 8rem;
        }
    }

</style>