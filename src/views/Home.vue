<template>
  <div class="home">
    <b-container>
      <Card :src="src" :h1="h1" :a="a" :to="to11"></Card>
      <withLoggerCard :src="src" :h1="h12" :a="a2" :to="to21"  v-sticky="20" style="z-index:3"></withLoggerCard>
      <Card :src="src" :h1="h13" :a="a3" :to="to31"></Card>
      <Card :src="src" :h1="h14" :a="a4" :to="to41"></Card>
      <b-row  >
        <b-col md="6">
      <b-button to="/anim" class="animated-button victoria-one w-50">anim</b-button>
        </b-col>
        <b-col md="6">
      <b-button to="/anim2" class="animated-button thar-three w-50">anim2</b-button>
        </b-col>
      </b-row>
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
<style>
.btn-secondary.animated-button:link, .btn-secondary.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #000;
  font-size:14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: .08em;
  background: transparent;
  border-radius: 0;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
.btn-secondary.animated-button:link:after, .btn-secondary.animated-button:visited:after {
  content: "";
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 150%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}
.btn-secondary.animated-button:link:hover, .btn-secondary.animated-button:visited:hover {
  color: #000;
  text-shadow: none;
}
.btn-secondary.animated-button:link:hover:after, .btn-secondary.animated-button:visited:hover:after {
  height: 450%;
}
.btn-secondary.animated-button:link, .btn-secondary.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #000;
  font-size:14px;
  border-radius: 0;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: .08em;
  text-shadow: 0 0 1px rgba(36, 32, 32, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

/* Victoria Buttons */

.btn-secondary.animated-button.victoria-one {
  border: 2px solid #D24D57;
}
.btn-secondary.animated-button.victoria-one:after {
  background: #D24D57;
  -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
.btn-secondary.animated-button.victoria-two {
  border: 2px solid #D24D57;
}
.btn-secondary.animated-button.victoria-two:after {
  background: #D24D57;
  -moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
  -ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
  transform: translateX(-50%) translateY(-50%) rotate(25deg);
}
.btn-secondary.animated-button.thar-three {
  color: #000;
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid #F7CA18;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
.btn-secondary.animated-button.thar-three:hover {
  color: #fff !important;
  background-color: transparent;
  text-shadow: nthree;
}
.btn-secondary.animated-button.thar-three:hover:before {
  left: 0%;
  right: auto;
  width: 100%;
}
.btn-secondary.animated-button.thar-three:before {
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 0px;
  z-index: -1;
  content: '';
  color: #000 !important;
  background: #F7CA18;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}

</style>
