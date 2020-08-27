<template>
    <div>
        <div class="container pt-5 mt-4 pb-4 mb-5">
            <div class="row row-cols-1" data-aos="fade-down" data-aos-duration="2000">
                <div class="col-12 text-center">
                    <h1 class="Roboto heading">Contact Us</h1>
                </div>
                <div class="col-12 text-center">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industry's</p>
                </div>           
            </div>
            <form data-aos="fade-up" data-aos-duration="2000">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control p-2" placeholder="Enter Your Name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control p-2" placeholder="Enter Your Email">
                    </div>
                </div>
                <div class="row pt-4">
                    <div class="col-12">
                        <textarea class="p-2" name="" id="" rows="10" placeholder="Enter Your Message"></textarea>
                    </div>
                </div>
                <div class="row justify-content-center pt-2">
                    <button class="btn my-blue-btn p-btn white" type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.my-blue-btn {
    background-color: #1487FD;
}

.p-btn {
    padding: 0.6rem 3.5rem 0.6rem 3.5rem;
    border-radius: 12px;
}

input {
    border: none;
        background-color: #FBFBFB;
}

textarea {
    background-color: #FBFBFB;
    border: none;
    resize: none;
    height: 200px;
    width: 100%;
}

textarea::-webkit-input-placeholder {
    background-color: #FBFBFB;
}

textarea::-moz-placeholder {
    background-color: #FBFBFB;
}

textarea::-ms-input-placeholder {
    background-color: #FBFBFB;
}

textarea::placeholder {
    background-color: #FBFBFB;
}

</style>