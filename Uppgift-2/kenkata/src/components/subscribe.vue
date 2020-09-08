<template>

    <div class="bg">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="pl-4 text-black">
                <h1 class="pr-2 font-weight-bold">SUBSCRIBE <span class="my-blue-color">NOW</span></h1>
                <p class="font-size">Signup for awesome news about our new products and 
                <br> know our special discounts on products.</p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter email address" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn my-blue white" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="../assets/greyBGsub.png" alt="">
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

input {
    border-radius: 50px;
}::placeholder {
    color: rgb(153, 153, 153) !important;
    font-size: 14px;
    margin-left: 2rem;
}

input.form-control {
    padding-left: 1rem;
}


.btn {
    border-radius: 20px;
}

.font-size {
    font-size: 14px;
}
.bg {
    background-color: #F6F6F6;
}



</style>