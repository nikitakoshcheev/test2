<template>
  <div class="home">
    <b-container>
      <Card :src="src" :h1="h1" :a="a" :to="to11"></Card>
      <withLoggerCard :src="src" :h1="h12" :a="a2" :to="to21"  v-sticky="20" style="z-index:3"></withLoggerCard>
      <Card :src="src" :h1="h13" :a="a3" :to="to31"></Card>
      <Card :src="src" :h1="h14" :a="a4" :to="to41"></Card>
      <b-button to="/anim">anim</b-button>
      <b-button to="/anim2">anim2</b-button>
    <div style="height:1000px"></div>
    </b-container>
  </div>
</template>
<script>
import {withLoggerCard} from '../components/HOC`s/WithLoggerCard'
import {mixin} from '../components/mixins/mixin'
import Card from '../components/Card.vue'
const cardH = withLoggerCard(Card)
export default {
  mixins:[mixin],
  name: "Home",
  components: {Card,withLoggerCard: cardH
  },
  data(){
    return{
      a:'',
      a2:'',
      a3:'',
      a4:'',
    }
  },
  mounted(){
       this.a = this.p1.split('.')[0]; 
       this.a2 = this.p2.split('.')[1]; 
       this.a3 = this.p3.split('.')[3]; 
       this.a4 = this.p4.split('.')[4]; 
  }
};
</script>
