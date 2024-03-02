<template>
  <div class="primary-frame">
    <div class="background" />
    <main class="nested-frame-a">
      <section class="nested-frame-b">
        <div class="text-a">
          <div class="login-user-info">
            <b class="b">株式会社トリプルスリー</b>
            <b class="b1">ヨシオカ ユウカ</b>
          </div>
        </div>
        <div class="registration-prompt">
          <div class="div">ユーザーの新規登録をお願いします。</div>
        </div>
        <div class="name-field">
          <div class="user-detail-info">
            <div class="div1">
              <b class="b2">名前</b>
              <input name="" class="last-called-date" type="text" />
            </div>
            <div class="div2">
              <b class="b3">コミュニティー</b>
              <input name="" class="child" type="text" />
            </div>
            <div class="div3">
              <b class="b4">年齢</b>
              <input name="" class="item" type="text" />
            </div>
            <div class="div4">
              <b class="b5">現在の職業</b>
              <input name="" class="inner" type="text" />
            </div>
            <div class="div5">
              <b class="b6">声をかけた日</b>
              <input name="" class="rectangle-input" type="date" />
            </div>
            <div class="div6">
              <b class="b7">反応</b>
              <select name="pets" class="child1">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
            <div class="div7">
              <b class="b8">現給与（月収）</b>
              <input name="" class="child2" type="text" />
            </div>
            <div class="div8">
              <b class="b9">職場環境について</b>
              <input name="" class="child3" type="text" />
            </div>
            <div class="div9">
              <b class="b10">将来何したいか</b>
              <input name="" class="child4" type="text" />
            </div>
            <div class="div10">
              <b class="b11">飲食への興味</b>
              <input name="" class="child5" type="text" />
            </div>
            <div class="div11">
              <b class="b12">次回の声かけ日</b>
              <input name="" class="child6" type="date" />
            </div>
            <div class="div12">
              <b class="b13">ネクストアクション</b>
              <textarea name="" class="child7"></textarea>
            </div>
            <div class="div13">
              <b class="b14">備考</b>
              <textarea name="" class="child7"></textarea>
            </div>
          </div>
        </div>
        <div class="feedback-field">
          <button class="button">
            <b class="b15">キャンセル</b>
            <img class="group-icon" alt="" src="/group-166.svg" />
          </button>
          <button class="button1">
            <b class="b16">確認する</b>
            <img class="child8" alt="" src="/group-166.svg" />
          </button>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "PrimaryFrame",
  });
</script>
<style scoped>
  .background {
    align-self: stretch;
    height: 1430px;
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
  .frame-b {
    height: 5px;
    width: 45px;
    position: absolute;
    margin: 0 !important;
    top: 12px;
    right: 15px;
    border-radius: var(--br-10xs);
    background-color: var(--color-gainsboro);
  }
  .frame-b1 {
    height: 5px;
    width: 45px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 2.5px);
    right: 15px;
    border-radius: var(--br-10xs);
    background-color: var(--color-gainsboro);
  }
  .header-child {
    height: 5px;
    width: 45px;
    position: absolute;
    margin: 0 !important;
    right: 15px;
    bottom: 12px;
    border-radius: var(--br-10xs);
  }
  .header {
    align-self: stretch;
    border-bottom: 1px solid var(--color-lavender);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 0px;
    position: relative;
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
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 39px;
    z-index: 1;
  }
  .text-a {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-9xs);
  }
  .div {
    position: relative;
    line-height: 10px;
    font-size: 14px; /* 少し小さな文字サイズに設定 */
    display: inline; /* テキストを一行に表示 */
    z-index: 1;
  }
  .registration-prompt {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 8px;
    font-size: var(--font-size-mini);
    color: var(--color);
  }
  .b2 {
    position: relative;
  }
  .last-called-date {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b3 {
    position: relative;
  }
  .child {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b4 {
    position: relative;
  }
  .item {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b5 {
    position: relative;
  }
  .inner {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div4 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b6 {
    position: relative;
  }
  .rectangle-input {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div5 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b7 {
    position: relative;
  }
  .child1 {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div6 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b8 {
    position: relative;
  }
  .child2 {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div7 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b9 {
    position: relative;
  }
  .child3 {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div8 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b10 {
    position: relative;
  }
  .child4 {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div9 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b11 {
    position: relative;
  }
  .child5 {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div10 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b12 {
    position: relative;
  }
  .child6 {
    border: 1px solid var(--color-lavender);
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 35px;
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    min-width: 151px;
  }
  .div11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b13 {
    position: relative;
  }
  .rectangle-div {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-8xs);
    border: 1px solid var(--color-lavender);
  }
  .div12 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .b14 {
    position: relative;
  }
  .child7 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-8xs);
    border: 1px solid var(--color-lavender);
  }
  .div13 {
    align-self: stretch;
    height: 176px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .user-detail-info {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px 0px;
    z-index: 1;
  }
  .name-field {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    font-size: var(--font-size-base);
  }
  .b15 {
    position: relative;
    font-size: var(--font-size-mini);
    line-height: 10px;
    font-family: var(--font-zen-kaku-gothic-new);
    color: var(--color-steelblue);
    text-align: left;
  }
  .group-icon {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .button {
    cursor: pointer;
    border: 1px solid var(--color-steelblue);
    padding: var(--padding-xs) var(--padding-xs) var(--padding-smi);
    background-color: var(--color-white);
    align-self: stretch;
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px 10px;
    z-index: 1;
  }
  .b16 {
    position: relative;
    font-size: var(--font-size-mini);
    line-height: 10px;
    font-family: var(--font-zen-kaku-gothic-new);
    color: var(--color-steelblue);
    text-align: left;
  }
  .child8 {
    height: 12px;
    width: 12px;
    position: relative;
    display: none;
  }
  .button1 {
    cursor: pointer;
    border: 1px solid var(--color-steelblue);
    padding: var(--padding-xs) var(--padding-xs) var(--padding-smi);
    background-color: var(--color-white);
    align-self: stretch;
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px 10px;
    z-index: 1;
  }
  .feedback-field {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px 0px;
  }
  .nested-frame-b {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 19px 0px;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-slategray);
    font-family: var(--font-zen-kaku-gothic-new);
  }
  .nested-frame-a {
    width: 308px;
    height: 1367px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 25px 0px 20px;
    box-sizing: border-box;
  }
  .primary-frame {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 横方向（水平方向）の中央揃え */
    align-items: center; /* 縦方向（垂直方向）の中央揃え */
  }
</style>