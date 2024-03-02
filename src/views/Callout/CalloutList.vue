<template>
  <div class="register-button">
    <div class="login-user-info">
      <b class="b">株式会社トリプルスリー</b>
      <b class="b1">ヨシオカ ユウカ</b>
    </div>
    <div class="wrapper">
      <button class="button">
        <b class="b2">声かけ登録</b>
        <img class="child" alt="" src="/group-166.svg" />
      </button>
    </div>
    <div class="container">
      <button class="button1">
        <b class="b3">ユーザー検索</b>
        <img class="item" alt="" src="/group-166.svg" />
      </button>
    </div>
    <div class="frame">
      <h3 class="h3">声掛けリスト</h3>
    </div>
    <main class="user-list">
        <UserInfoSample :reports="reports" />
    </main>
    <div class="parent">
      <div class="div">
        <h3 class="h31">前へ</h3>
        <img class="inner" alt="" src="/group-166.svg" />
      </div>
      <div class="div1">
        <b class="b4">1/25</b>
        <img class="group-icon" alt="" src="/group-166.svg" />
      </div>
      <div class="div2">
        <h3 class="h32">次へ</h3>
        <img class="child1" alt="" src="/group-166.svg" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import UserInfoSample from "../../components/UserInfoSample.vue";

  export default defineComponent({
    name: "RegisterButton",
    components: { UserInfoSample },
    data() {
      return {
        reports: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const params = 'fwfwfw'; // パラメータを設定する必要があれば追加
        fetch('http://localhost:3000/callout/list/' + params)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.reports = data; // reportsを取得したデータで上書き
            console.log(data);
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          });
      }
    }
  });
</script>
<style scoped>
  .background {
    align-self: stretch;
    height: 1011px;
    position: relative;
    background-color: var(--color-white);
    display: none;
  }
  .triple-consulting-1-1 {
    height: 49px;
    width: 240px;
    position: relative;
    object-fit: cover;
  }
  .hamburger-menu-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-10xs);
    background-color: var(--color-gainsboro);
    width: 45px;
    height: 5px;
  }
  .hamburger-menu-item {
    position: absolute;
    top: 10px;
    left: 0px;
    border-radius: var(--br-10xs);
    background-color: var(--color-gainsboro);
    width: 45px;
    height: 5px;
  }
  .hamburger-menu-inner {
    position: absolute;
    top: 20px;
    left: 0px;
    border-radius: var(--br-10xs);
    width: 45px;
    height: 5px;
  }
  .hamburger-menu {
    height: 25px;
    width: 45px;
    position: relative;
    display: none;
  }
  .header {
    align-self: stretch;
    border-bottom: 1px solid var(--color-lavender);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0px 20px;
    z-index: 1;
  }
  .b {
    position: relative;
  }
  .b1 {
    position: relative;
  }
  .login-user-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    gap: 0px 39px;
    z-index: 1;
  }
  .b2 {
    position: relative;
    font-size: var(--font-size-mini);
    line-height: 10px;
    font-family: var(--font-zen-kaku-gothic-new);
    color: var(--color-white);
    text-align: left;
  }
  .child {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .button {
    cursor: pointer;
    border: none;
    padding: var(--padding-smi) 21px var(--padding-xs) var(--padding-xl);
    background-color: var(--color-steelblue);
    flex: 1;
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px 10px;
    z-index: 1;
  }
  .wrapper {
    width: 302px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl) 0px var(--padding-xl);
    box-sizing: border-box;
  }
  .b3 {
    position: relative;
    font-size: var(--font-size-mini);
    line-height: 10px;
    font-family: var(--font-zen-kaku-gothic-new);
    color: var(--color-white);
    text-align: left;
  }
  .item {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .button1 {
    cursor: pointer;
    border: none;
    padding: var(--padding-smi) var(--padding-xs) var(--padding-xs);
    background-color: var(--color-steelblue);
    flex: 1;
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px 10px;
    z-index: 1;
  }
  .container {
    width: 302px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl) 0px var(--padding-xl);
    box-sizing: border-box;
  }
  .h3 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    z-index: 1;
  }
  .frame {
    width: 302px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    font-size: 14px;
  }
  .user-list {
    width: 303px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    z-index: 1;
  }
  .h31 {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 10px;
    font-weight: 700;
    font-family: inherit;
  }
  .inner {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .div {
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-steelblue);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-smi) var(--padding-xs) var(--padding-xs);
    gap: 0px 10px;
    z-index: 1;
  }
  .b4 {
    position: relative;
    line-height: 10px;
  }
  .group-icon {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .div1 {
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--color-steelblue);
    border: 1px solid var(--color-steelblue);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-smi) 25px var(--padding-xs) 24px;
    gap: 0px 10px;
    z-index: 1;
    color: var(--color-white);
  }
  .h32 {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 10px;
    font-weight: 700;
    font-family: inherit;
  }
  .child1 {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .div2 {
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-steelblue);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-smi) var(--padding-xs) var(--padding-xs);
    gap: 0px 10px;
    z-index: 1;
  }
  .parent {
    width: 304px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: 0px 12px;
    font-size: var(--font-size-mini);
    color: var(--color-steelblue);
  }
  .register-button {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-xl);
    box-sizing: border-box;
    gap: 9px 0px;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-slategray);
    font-family: var(--font-zen-kaku-gothic-new);
  }

</style>
