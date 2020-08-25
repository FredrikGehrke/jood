<template>
  <div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SeventhSection/>
    <FooterSection/>
  </div>
</template>

<script>
import FirstSection from './components/FirstSection.vue'
import SecondSection from './components/SecondSection.vue'
import ThirdSection from './components/ThirdSection.vue'
import FourthSection from './components/FourthSection.vue'
import FifthSection from './components/FifthSection.vue'
import SixthSection from './components/SixthSection.vue'
import SeventhSection from './components/SeventhSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    SixthSection,
    SeventhSection,
    FooterSection
  }
}
</script>

<style>

  :root {
    --ownOrange: #FFBB00;
    --ownBlue: #1487FD; 
    --ownGray: #333333;
    --ownLightGray: #8A8A8A;  
  }

  .owl-item > div {
    cursor: pointer;
    margin: 15% 8%;
    transition: margin 0.5s ease-in-out;
}

  .owl-item.center > div {
    margin: 0;
  }

  .bgPhone {
    background-image: url('./assets/iPhoneCase.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 8px 0;
  }

  .my-orange {
    color: #FFBB00;
  }

  .my-blue {
    color: #1487FD;
  }

  .my-gray {
    color: #333333;
  }

  .my-lightGray {
    color: #8A8A8A;
  }

  .white {
    color: white;
  }

  .Poppins {
    font-family: 'Poppins', sans-serif;
  }

  .Roboto {
    font-family: 'Roboto', sans-serif;
  }

  .aboutUsBtn {
    color: var(--ownOrange);
    background-color: rgba(214, 142, 7, 0.185);
    padding: 0.3rem 0.9rem 0.3rem 0.9rem;
    margin-bottom: 1.5rem;
  }

  .heading {
    font-weight: 800;
  }

  #brand {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 30px;
  }

  .my-dot {
    margin-left: -0.2rem;
    height: 7px;
    width: 7px;
    background-color: #FFBB00;
    border-radius: 50%;
    display: inline-block;
  }

  .nav-link:hover {
    color: var(--ownOrange);
  }

  * {
    font-family: 'Roboto';
    letter-spacing: 0.5px;
    box-sizing: border-box;
  }

</style>
