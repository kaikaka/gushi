<template>
  <div class="background">
    <div class="input-container">
      <h3 class="title">你的名字 <small>古诗文起名V1.0</small></h3>
      <div>本项目全部开源</div>
      <p></p>
      <van-radio-group v-model="checked">
        <van-cell-group>
        <van-cell title="单选框 1" clickable @click="checked = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="单选框 2" clickable @click="checked = '2'">
          <template #right-icon>
            <van-radio name="2" class="van-radio__icon"/>
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    </div>
  </div>
</template>
<script>

export default {
  name:'Index',
  methods:{
    chenradio1() {
    this.radio = "1";
    console.log("我触发了点击事件一");
    },
    chenradio2() {
    this.radio = "2";
    console.log("我触发了点击事件2");
    }
  },
  data() {
    return {
      radio: '1'
    }
  }
  
}
</script>
<style>
  .background {
    width: 60%;
    max-width: 750px;
    margin: 0;
    text-align: left;
    background-color:rgb(222, 226, 230);
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
  .van-radio__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
</style>
