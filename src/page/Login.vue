<template>
  <div id="login">
    login
    <button @click="testAjax()">ajax</button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  export default{
    methods:{
      ...mapActions(['testAjax'])
    }
  }
</script>
<style lang="scss">

</style>
