<template>
     <b-card class="mt-5"  >
      <b-row >
        <div style="width:30%">
          <img :src="src" alt="">
        </div>
        <div style="width:70%" class="">
          <h1>{{h1}}</h1>
          <p>{{a}}</p>
          <b-button class="btn" :to="to">Перейти к статье</b-button>
        </div>
      </b-row>
    </b-card>
</template>
<script>
export default {
  props:['src','h1','a','to']
}
</script>