<template>
  <div class="about">
    <b-container>
    <b-row class="d-flex justify-content-center">
      <h1>{{h13}}</h1>
    </b-row>
    <b-row class="d-flex justify-content-center">
       <img :src="src"  style="width:400px"  alt="">
    </b-row>
    <b-row>
      <p>{{p3}}</p>
    </b-row>
    <b-row class="d-flex justify-content-center">
       <b-button class="btn w-25"  :to="to12">На главную</b-button>
    </b-row>
    </b-container>
  </div>
</template>
<script>
import {mixin} from '../components/mixins/mixin'
export default {
  mixins:[mixin],
  components: {
  }
};
</script>

