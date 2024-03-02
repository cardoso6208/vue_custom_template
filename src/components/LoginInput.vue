<template>
  <div class="login-input">
    <h2 class="h2">ログイン</h2>
    <form class="parts-text-frames">
      <div class="parts">
        <input class="input" placeholder="メールアドレス" type="text" />
      </div>
      <div class="parts1">
        <input class="input1" placeholder="パスワード" type="text" />
      </div>
      <button class="parent">
        <b class="b">ログイン</b>
        <img class="instance-child" alt="" src="/group-166.svg" />
      </button>
    </form>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "LoginInput",
  });
</script>
<style scoped>
  .h2 {
    margin: 0;
    height: 17px;
    position: relative;
    font-size: inherit;
    line-height: 100%;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
  }
  .input {
    width: 105px;
    border: none;
    outline: none;
    font-family: var(--jp-15px-bold);
    font-size: var(--jp-15px-bold-size);
    background-color: transparent;
    height: 10px;
    position: relative;
    line-height: 100%;
    color: var(--color-dimgray);
    text-align: left;
    display: inline-block;
  }
  .parts {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--style);
    border: 1px solid var(--f3f3f3);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-3xs);
  }
  .input1 {
    width: 75px;
    border: none;
    outline: none;
    font-family: var(--jp-15px-bold);
    font-size: var(--jp-15px-bold-size);
    background-color: transparent;
    height: 10px;
    position: relative;
    line-height: 100%;
    color: var(--color-dimgray);
    text-align: left;
    display: inline-block;
  }
  .parts1 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--style);
    border: 1px solid var(--f3f3f3);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-3xs);
  }
  .b {
    height: 10px;
    position: relative;
    font-size: var(--jp-15px-bold-size);
    line-height: 100%;
    display: inline-block;
    font-family: var(--jp-15px-bold);
    color: var(--style);
    text-align: left;
  }
  .instance-child {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .parent {
    cursor: pointer;
    border: none;
    padding: var(--padding-sm) var(--padding-21xl);
    background-color: var(--color-steelblue);
    align-self: stretch;
    height: 44px;
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 0px 10px;
  }
  .parts-text-frames {
    margin: 0;
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px 0px;
  }
  .login-input {
    align-self: stretch;
    flex: 1;
    display: flex;
  }
</style>