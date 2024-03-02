<template>
  <div class="user-info-sample" :style="userInfoSampleStyle" v-for="(item, index) in reports" :key="index">
    <h1 class="h1">{{ item.Name }}</h1>
      <h1 :class="'a report-status status-' + item.Status">{{ item.Status }}</h1>
      <div class="div3">声をかけた日 : {{ item.CalloutDate }}</div>
      <div class="div4">{{ item.Author }}</div>
      <div class="div5">次回声かけ日 : {{ item.NextCalloutDate }}</div>
      <div class="div6">コミュニティ : {{ item.Community }}</div>
    </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserInfoSample",
    props: {
      reports: {
        type: Array,
        required: true
      }
    },
    // props: {
    //   prop: { type: String },
    //   a: { type: String },
    //   propBackgroundColor: { type: String },
    //   propColor: { type: String },
    //   propLeft: { type: [Object, Array, String, Number, Boolean] },
    //   Name: {}
    // },
    // computed: {
    //   userInfoSampleStyle() {
    //     return {
    //       backgroundColor: this.propBackgroundColor,
    //     };
    //   },
    //   aStyle() {
    //     return {
    //       color: this.propColor,
    //       left: this.propLeft,
    //     };
    //   },
    // },
  });
</script>
<style scoped>
  .h1 {
    margin: 0 !important;
    position: absolute;
    top: 7px;
    left: 10px;
    font-size: var(--font-size-5xl);
    font-weight: 500;
    font-family: inherit;
  }
  .a {
    margin: 0 !important;
    position: absolute;
    top: 7px;
    left: 121px;
    font-size: var(--font-size-xl);
    font-weight: 700;
    font-family: inherit;
  }
  .div3 {
    position: absolute;
    margin: 0 !important;
    top: 42px;
    left: 10px;
  }
  .div4 {
    position: absolute;
    margin: 0 !important;
    top: 42px;
    left: 135px;
  }
  .div5 {
    position: absolute;
    margin: 0 !important;
    top: 60px;
    left: 10px;
  }
  .div6 {
    position: absolute;
    margin: 0 !important;
    top: 60px;
    left: 135px;
  }
  .user-info-sample {
    align-self: stretch;
    height: 79px;
    border-radius: var(--br-11xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-lavender);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs) var(--padding-3xs);
    position: relative;
    gap: 6px 2px;
    text-align: left;
    font-size: var(--font-size-3xs);
    color: var(--color-dimgray);
    font-family: var(--font-inter);
  }

  .status-A { 
  background: #FFF;
  color: var(--color-status-a);
  }
  .status-B { 
    background: #FFF; 
    color: var(--color-status-b);
  }
  .status-C { 
    background: #FFF; 
    color: var(--color-status-c);
  }
</style>
