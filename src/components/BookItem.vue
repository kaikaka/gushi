<template>
  <div class="item">
    <input type="radio" id="shijing" name="book" value="shijing" checked>
    <label class="label" for="shijing">诗经</label>
  </div>
</template>
<script>
export default {
  name: "BookItem"
}
</script>
<style>
  .item {
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: #ffd;
  }
  .label {
    padding: 12px 30px;
    display: block;
    text-align: left;
    color: #3C454C;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 100ms ease-in;
    overflow: hidden;
  }
  .label::before {
    width: 12px;
      height: 12px;
      /* border-radius: 50%; */
      content: '';
      background-color: #fb9e8d;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      z-index: -1;
  }
</style>