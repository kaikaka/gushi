<template>
  <div class="background">
    <div class="input-container">
      <h3 class="title">你的名字 <small>古诗文起名V1.0</small></h3>
      <div>本项目全部开源</div>
      <p></p>
      <div class="book-selector">
        <div class="inputGroup"><book-item></book-item></div>
      </div>
    </div>
  </div>
</template>
<script>
import BookItem from './BookItem.vue'

export default {
  components: { BookItem },
  name:'Index'
}
</script>
<style>
  .background {
    width: 60%;
    max-width: 800px;
    margin: 0;
    text-align: left;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-weight: bold;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .book-selector {
    padding: 1rem;
    margin: 0;
    width: 100%;
    height: 400px;
  }
  .inputGroup {
    box-sizing: border-box;
    width: 90%;
    height: 40px;
    background-color: #fff;
    margin: 8px;
  }
</style>
