<template>
    <div class="footer-bg">
        <div class="container pt-5 mt-4 pb-5">
            <div class="row row-cols-1">
                <div class="col-12 text-center">
                    <a class="navbar-brand col-4 col-md-4 col-lg-2 white" id="brand" href="#">JOOD <strong class="my-dot"></strong></a>
                </div>
                <div class="col-12 text-center">
                    <div class="row d-flex justify-content-center">
                        <a class="nav-link white" href="#">Home</a>
                        <a class="nav-link white" href="#">About Us</a>
                        <a class="nav-link white" href="#">Features</a>
                        <a class="nav-link white" href="#">Screens</a>
                        <a class="nav-link white" href="#">Contact Us</a>
                    </div>
                </div> 
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-light m-2">
                        <img src="../assets/facebook.png" alt="">    
                    </button>    
                    <button type="button" class="btn btn-light m-2">
                        <img src="../assets/twitter.png" alt="">    
                    </button>    
                    <button type="button" class="btn btn-light m-2">
                        <img src="../assets/instagram.png" alt="">    
                    </button>    
                    <button type="button" class="btn btn-light m-2">
                        <img src="../assets/google-hangouts.png" alt="">    
                    </button>    
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

    button {
        background-color: rgba(221, 221, 221, 0.274);
        border: none;
    }

    .footer-bg {
        background-image: url('../assets/footer-bg.png');
        width: 100%;
        background-size: cover;
        color: white; 
        background-repeat: no-repeat;
    }

    @media (min-width: 1200px) {
        button {
            height: 70%;
            width: 2.5%;
            padding: 0;
        }
    }

</style>