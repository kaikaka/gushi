<template>
  <div class="background">
    <div class="input-container">
      <h3 class="title">你的名字 <small>古诗文起名V1.0</small></h3>
      <div>本项目全部开源</div>
      <p></p>
      <div class="book-selector">
      <bookItem class="input-group"></bookItem>
        <!-- <BookItem>ggggggggg</BookItem> -->
      </div>
    </div>
  </div>
</template>
<script>

import BookItem from "./BookItem"

export default {
  component:  {
    BookItem
  }
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
  .input-group {
    /* box-sizing: border-box;
    width: 45px;
    height: 80px;
    display: inline-block;
    background-color: #fff;
    margin: 8px;
    position: relative; */
  }
</style>
