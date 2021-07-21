<template>
  <div class="background">
    <div class="input-container">
      <h3 class="title">你的名字 <small>古诗文起名V1.0</small></h3>
      <p></p>
      <van-radio-group v-model="checked">
      <van-cell-group>
        <van-cell title="诗经" clickable @click="checked = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="楚辞" clickable @click="checked = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
        <van-cell title="唐诗" clickable @click="checked = '3'">
          <template #right-icon>
            <van-radio name="3" />
          </template>
        </van-cell>
        <van-cell title="宋词" clickable @click="checked = '4'">
          <template #right-icon>
            <van-radio name="4" />
          </template>
        </van-cell>
        <van-cell title="乐府诗集" clickable @click="checked = '5'">
          <template #right-icon>
            <van-radio name="5" />
          </template>
        </van-cell>
        <van-cell title="古诗三百首" clickable @click="checked = '6'">
          <template #right-icon>
            <van-radio name="6" />
          </template>
        </van-cell>
        <van-cell title="著名辞赋" clickable @click="checked = '7'">
          <template #right-icon>
            <van-radio name="7" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <p></p>
    <van-cell-group inset>
      <van-field v-model="value" label="姓氏" placeholder="请输入姓氏" />
    </van-cell-group>
    <p></p>
    <van-button plain hairline type="primary" size="large" @click="onClickGenerate">起名</van-button>
    <p></p>
    <van-list>
    <van-cell v-for="item in list" :key="item">
      <van-row justify="space-between">
        <van-col span="6">{{this.value + item.name}}</van-col>
        <van-col span="50">[{{item.book}}] • {{item.title}}</van-col>
      </van-row>
      <p></p>
      <van-row justify="space-between">
        <van-col span="200">{{item.sentence}}</van-col>
        <van-col span="50">[{{item.dynasty}}]{{item.author}}</van-col>
      </van-row>
    </van-cell>
    </van-list>
    <p></p>
    </div>
  </div>
</template>
<script>

export default {
  name:'Index',
  mounted() {
    this.loadBook('shijing')
  },
  watch: {
    checked() {
      if (this.checked == '1') {
        this.loadBook('shijing')
      } else if (this.checked == '2') {
        this.loadBook('chuci')
      } else if (this.checked == '3') {
        this.loadBook('tangshi')
      } else if (this.checked == '4') {
        this.loadBook('songci')
      } else if (this.checked == '5') {
        this.loadBook('yuefu')
      } else if (this.checked == '6') {
        this.loadBook('gushi')
      } else if (this.checked == '7') {
        this.loadBook('cifu')
      }
    }
  },
  methods: {
    onClickGenerate() {
     
      this.onLoadNames()
    },
    onLoadNames () {
      this.list = []
      for (let i = 0; i < 6; i++) {
        const items = this.genName()
        console.log(items);
        this.list.push(items);
      }
    },
    between (min, max) {
      return min + Math.floor(Math.random() * (max - min))
    },
    choose (arr) {
      const index = this.between(0, arr.length);
      return arr[index];
    },
    formatStr(str) {
      let res = str.replace(/(\s| |”|“){1,}|<br>|<p>|<\/p>/g, '');
      res = res.replace(/\(.+\)/g, '');
      return res;
    },

    splitSentence(content) {
      if (!content) {
        return [];
      }
      let str = this.formatStr(content);
      str = str.replace(/！|。|？|；/g, s => `${s}|`);
      str = str.replace(/\|$/g, '');
      let arr = str.split('|');
      arr = arr.filter(item => item.length >= 2);
      return arr;
    },

    cleanPunctuation(str) {
      const puncReg = /[<>《》！*(^)$%~!@#…&%￥—+=、。，？；‘’“”：·`]/g;
      return str.replace(puncReg, '');
    },

    cleanBadChar(str) {
      const badChars = '胸鬼懒禽鸟鸡我邪罪凶丑仇鼠蟋蟀淫秽妹狐鸡鸭蝇悔鱼肉苦犬吠窥血丧饥女搔父母昏狗蟊疾病痛死潦哀痒害蛇牲妇狸鹅穴畜烂兽靡爪氓劫鬣螽毛婚姻匪婆羞辱'.split('');
      return str.split('').filter(char => badChars.indexOf(char) === -1).join('');
    },

    genName() {
      if (!this.book) {
        return null;
      }
      try {
        const passage = this.choose(this.book);
        const { content, title, author, book, dynasty } = passage;
        if (!content) {
          return null;
        }

        const sentenceArr = this.splitSentence(content);
        if (!(Array.isArray(sentenceArr) && sentenceArr.length > 0)) {
          return null;
        }

        const sentence = this.choose(sentenceArr);

        const cleanSentence = this.cleanBadChar(this.cleanPunctuation(sentence));
        if (cleanSentence.length <= 2) {
          return null;
        }
        const name = this.getTwoChar(cleanSentence.split(''));
        const res = {
          name,
          sentence,
          content,
          title,
          author,
          book,
          dynasty,
        };
        return res;
      } catch (err) {
        console.log(err);
      }
    },

    getTwoChar(arr) {
      const len = arr.length;
      const first = this.between(0, len);
      let second = this.between(0, len);
      let cnt = 0;
      while (second === first) {
        second = this.between(0, len);
        cnt++;
        if (cnt > 100) {
          break;
        }
      }
      return first <= second ? `${arr[first]}${arr[second]}` : `${arr[second]}${arr[first]}`;
    },

    loadBook(book) {
      const url = `./json/${book}.json`;
      this.loading = true;
      console.log(url);
      axios
      .get(url)
      .then(response => (
        this.book = response.data
      ))
    }
  },
  data() {
    return {
      checked: "1",
      value:"李",
      book :null,
      loading: false,
      list:[]
    }
  }
}
import axios from 'axios'
</script>
<style>
  .background {
    width: 95%;
    max-width: 750px;
    margin-top: 10px;
    text-align: left;
    /* background-color:rgb(222, 226, 230); */
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
  van-grid {
    width: 95%;
    height: 80%;
  }
</style>
