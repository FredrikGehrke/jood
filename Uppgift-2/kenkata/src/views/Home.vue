<template>
  <div>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">

            <div class="carousel-caption text-left container display-ipad my-mb">
              <div class="col-md-6 pl-0 mr-auto">
                <h1 class="title black">Shopping is</h1>
                <h1 class="title my-blue-color font-weight-bold">MORE FUN</h1>
                <p class="subtitle">Vivamus dignissim a ex eu ornare. Ut fermentum orci <br>
                  vel diam ultricies faucibus. Quisque quis erat sed</p>
                  <a href="#"><button type="button" class="btn WHITE-BTN font-weight-bold my-blue-color">SHOP NOW</button></a>
              </div>
            </div>

          <img class="d-block w-100" src="@/assets/HomeBG.png" alt="First slide">
        </div>
        <div class="carousel-item">
            <div class="carousel-caption text-left container display-ipad my-mb">
              <div class="col-md-6 pl-0 mr-auto">
                <h1 class="title black">Shopping is</h1>
                <h1 class="title my-blue-color font-weight-bold">MORE FUN</h1>
                <p class="subtitle">Vivamus dignissim a ex eu ornare. Ut fermentum orci <br>
                  vel diam ultricies faucibus. Quisque quis erat sed</p>
                  <a href="#"><button type="button" class="btn WHITE-BTN font-weight-bold my-blue-color">SHOP NOW</button></a>
              </div>
            </div>
          <img class="d-block w-100" src="@/assets/HomeBG.png" alt="Second slide">
        </div>
        <div class="carousel-item">
              <div class="carousel-caption text-left container display-ipad my-mb">
              <div class="col-md-6 pl-0 mr-auto">
                <h1 class="title black">Shopping is</h1>
                <h1 class="title my-blue-color font-weight-bold">MORE FUN</h1>
                <p class="subtitle">Vivamus dignissim a ex eu ornare. Ut fermentum orci <br>
                  vel diam ultricies faucibus. Quisque quis erat sed</p>
                  <a href="#"><button type="button" class="btn WHITE-BTN font-weight-bold my-blue-color">SHOP NOW</button></a>
              </div>
            </div>
          <img class="d-block w-100" src="@/assets/HomeBG.png" alt="Third slide">
        </div>
      </div>
    </div>


    <div class="covertext container display-sm">
      <div class="">
        <h1 class="title">Shopping is</h1>
        <h1 class="title my-blue-color font-weight-bold">MORE FUN</h1>
        <p class="subtitle">Vivamus dignissim a ex eu ornare. Ut fermentum orci <br>
        vel diam ultricies faucibus. Quisque quis erat sed</p>
      </div>
      <div class="">
        <a href="#"><button type="button" class="btn btn-lg WHITE-BTN font-weight-bold my-blue-color">SHOP NOW</button></a>
      </div>
    </div>

  <shortInfo class="mt-5 pt-5"/>

  <shopByCategory class="mt-5 pt-5" /> 
  
  <newArrivals class="mt-5" />


  </div>
</template>

<script>


import shortInfo from '@/components/shortInfo.vue'
import shopByCategory from '@/components/shopByCategory.vue'
import newArrivals from '@/components/newArrivals.vue'


export default {
  name: 'Home',
  components: {
    shortInfo,
    shopByCategory,
    newArrivals,
  }
}
</script>

<style scoped>

  .greyBG {
    background-image: url('../assets/greyBG.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
  }

  .black {
    color: black;
  }

  .WHITE-BTN {
    background-color: var(--ownBlue);
    color: white;
  }

  .title {
    font-size: 30px !important;
  }


  .subtitle {
    color: black;
    font-size: 12px;
  }

  .display-ipad {
    display: none;
  }


@media (min-width: 576px) {  

  .display-ipad {
    display: block;
  }

  .display-sm {
    display: none;
  }

  .title {
    font-size: 40px;
  }

  .WHITE-BTN {
    background-color: white;
    color: var(--ownBlue);
  }

}

@media (min-width: 768px) {  }

@media (min-width: 992px) {  
  .title {
    font-size: 40px !important;
  }

  .my-mb {
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 14px;
  }
}

@media (min-width: 1550px) { 

  .title {
    font-size: 60px !important;
  }

  .my-mb {
    margin-bottom: 9rem;
  }
}


</style>
