<template>
  <Index msg="你的名字-用诗经 楚辞 唐诗 宋词起名字"/>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
html,body, #app{
  height: 100%;
  width: 100%;
  background-color:rgb(247, 248, 249);
}
</style>
