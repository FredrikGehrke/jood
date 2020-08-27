<template>
  <div class="first-section-bg">
    <div class="container p-bottom">     
      <nav class="navbar navbar-expand-lg navbar-dark pt-4">
        <a class="navbar-brand col-4 col-md-4 col-lg-2" id="brand" href="#">JOOD <strong class="my-dot"></strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-md-8 col-lg-10" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-3 active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item mr-3 white test">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">Screens</a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
            <button class="btn btn-warning btn-own-orange my-2 my-sm-0" type="submit">Get the app</button>
            </li>
          </ul>          
        </div>
      </nav>
      <div class="container" id="headingSection">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="2500">
            <div class="my-m-top">
              <h1 class="Poppins heading">Creative Way To Showcase Your App</h1>
              <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply</p>
            </div>
            <div class="download-box">
              <button class="btn btn-outline-primary white btn-border"><strong>Download Now</strong></button>
              <button id="watchVideoMobile" class="btn btn-outline-primary btn-border-orange ml-2 my-orange"><strong>Watch Video</strong></button>
              <div id="watchVideoIcon" class="">
                <img id="playBtn" class="ml-3" src="../assets/icon.png" alt=""><strong class="ml-3 ">Watch Video</strong>
              </div>              
            </div>
          </div>
          <div class="col-lg-6 mt-5" data-aos="fade-left" data-aos-duration="2500">
              <img class="img-fluid" src="../assets/Mobile.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  }
}
</script>


<style scoped>

  .p-bottom {
    padding-bottom: 4rem;
  }

  .nav-link {
    color: white !important;
  }

  .navbar {
    padding-left: 0;
  }

  #navbarSupportedContent {
    padding-right: 0;
  }

  .nav-item {
    font-weight: bold;
  }
  
  .active {
    position: relative;
  }

  .active::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0.1rem;
      left: 0;
      height: 2px;
      width: 8%;
      background-color: var(--ownOrange);
  }

  .first-section-bg {
    background-image: url('../assets/bg.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
  }

  .btn-own-orange {
    background-color: var(--ownOrange);
    color: white;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 12px;
  }

  .navbar-brand {
    padding-left: 0;
  }

  .mobile-png {
    background-image: url('../assets/Mobile.png');
    width: 20%;
    background-size: cover;
    color: white; 
  }

  .icon-png {
    background-image: url('../assets/icon.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
  }

  .btn-border {
    border-color: white;
    border: 2px solid;
    border-radius: 8px;
  } 
  .btn-border-orange {
    border: 2px solid;
    border-radius: 8px;
  } 
  
  .btn-border:hover {
    background-color: var(--ownOrange);
  }

  #watchVideoIcon {
    display: none;
  }

  #playBtn:hover {
    cursor: pointer;
  }

  .my-m-top {
    margin-top: 1rem;
  }

  .download-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  @media (min-width: 576px) { 
    .my-m-top {
      margin-top: 4rem !important;
    }
      .mobile-png {
      background-image: url('../assets/Mobile.png');
      width: 100%;
      background-size: cover;
      color: white; 
    }
  }

  @media (min-width: 768px) { 
    .my-m-top {
      margin-top: 5rem !important;
    }
    #watchVideoIcon {
      display: block;
    }
    #watchVideoMobile {
      display: none;
    }
  }

  @media (min-width: 992px) { 
    .download-box {
      align-items: left;
      justify-content: left;
    }
    .my-m-top {
      margin-top: 12rem !important;
    }
    #headingSection {
      padding: 0;
    }
    .p-bottom {
      padding-bottom: 8rem;
    }
    .active::after {
      left: 0.5rem;
      width: 50%;
    }
  }

  @media (min-width: 1200px) { 
    .first-section-bg {
      height: 100%;
    }
  }

</style>
