<template>
<!-- <div>


    <div id="carouselExampleIndicators" class="carousel slide greyBG" data-ride="carousel">
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <div class="container">
            <div class="my-mt">
            <h1 class="title black">Shopping is</h1>
            <h1 class="title my-blue-color font-weight-bold">MORE FUN</h1>
            <p class="subtitle">Vivamus dignissim a ex eu ornare. Ut fermentum orci <br>
            vel diam ultricies faucibus. Quisque quis erat sed</p>
            <a href="#"><button type="button" class="btn btn-lg WHITE-BTN font-weight-bold my-blue-color">SHOP NOW</button></a>
            </div>
          </div>
          <div class="col-8">
              <img class="d-block imgCarousel" src="@/assets/peopleImg.png" alt="First slide">
          </div>

        </div> 
        <div class="carousel-item">
          <div class="container">
            <div class="my-mt">
            <h1 class="title black">Shopping is</h1>
            <h1 class="title my-blue-color font-weight-bold">MORE FUN</h1>
            <p class="subtitle">Vivamus dignissim a ex eu ornare. Ut fermentum orci <br>
            vel diam ultricies faucibus. Quisque quis erat sed</p>
            <a href="#"><button type="button" class="btn btn-lg WHITE-BTN font-weight-bold my-blue-color">SHOP NOW</button></a>
            </div>
          </div>
          <div class="col-8">
              <img class="d-block imgCarousel" src="@/assets/peopleImg.png" alt="First slide">
          </div>

        </div> 

      </div>
    </div>

</div> -->

  <div class="my-relative my-mobile-height">

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/HomeBG.png" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/HomeBG.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/HomeBG.png" alt="Third slide">
        </div>
      </div>
    </div>

    <div class="covertext container">
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


  </div>
</template>

<script>


import shortInfo from '@/components/shortInfo.vue'
import shopByCategory from '@/components/shopByCategory.vue'


export default {
  name: 'Home',
  components: {
    shortInfo,
    shopByCategory,
  }
}
</script>

<style scoped>


  .my-mt {
    padding-top: 5rem;
  }

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

  .imgCarousel {
    margin-left: 45vw;
    margin-top: -30vh;
  }

  /* filip */


  .my-mobile-height {
    height: 28rem;
  }

  /* INTE POSITION FÖR BLIR VIT KANT, SKROLL OSV */

  .my-relative {
    position: relative;
  }

  .covertext {
    position: absolute; 
    top: 155x; 
    left: 0px; 
  }

  .WHITE-BTN {
    background-color: var(--ownBlue);
    color: white;
  }

  .title {
    font-size: 60px;
  }


  .subtitle {
    color: black;
  }


@media (min-width: 576px) {  

  .title {
    font-size: 40px;
  }

  .my-mobile-height {
    height: auto;
  }

  .covertext {
    top: 8px; 
    right: 15px;  
  }

  .WHITE-BTN {
    background-color: white;
    color: var(--ownBlue);
  }

}

@media (min-width: 768px) {  }

@media (min-width: 992px) {  
  .covertext {
    top: 40px; 
  }
}

@media (min-width: 1200px) { 

  .title {
    font-size: 60px;
  }

  .covertext { 
    top: 140px; 
    right: 20px; 
  }

}


</style>
