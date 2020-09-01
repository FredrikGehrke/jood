<template>
  <div>
    
    <navbar />

    <router-view/>

    <myFooter />

  </div>

</template>

<script>

import navbar from '@/components/navbar.vue'
import myFooter from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    myFooter
  }
}
</script>


<style>

  :root {
    --ownOrange: #FFBB00;
    --ownBlue: #20D3C2; 
    --darkerBlue: #0E153D; 
    --btnHover: #098d80; 
    --ownGray: #333333;
    --ownLightGray: #8A8A8A;  
  }

  .my-blue-color {
    color: var(--ownBlue);
  }

  .my-blue {
    background-color: #20D3C2;
  }

  * {
    font-family: 'Roboto', sans-serif;
    /* padding: 0 !important; */
  }

  .Roboto {
    font-family: 'Roboto', sans-serif;
  }

  .WHITE-BTN {
    background-color: white;
    border-radius: 30px;
    padding: 8px 20px 8px 20px;
  }


</style>
