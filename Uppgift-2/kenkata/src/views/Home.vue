<template>
  <div class="my-relative">

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
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <i class="fas fa-chevron-left arrow-btns"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <i class="fas fa-chevron-right arrow-btns"></i>
        <span class="sr-only">Next</span>
      </a>
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

  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>

  .my-relative {
    position: relative;
  }

  .covertext {
    position: absolute; /* To make the div to be place anywhere. It is out of the document flow */
    top: 120px; /* The distance between the div with the top of document */
    left: 0px; /* Make the div full width */
    right: 0px; /* Make the div full width */
  }

  .title {
    font-size: 60px;
  }

  .subtitle {

  }


  .arrow-btns {
    font-size: 30px;
    color: var(--ownBlue);
  }

  /* .first-section {
    position: absolute;
    right: 10%;
    bottom: 250px;
    left: 400px;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: left;
  } */

</style>
