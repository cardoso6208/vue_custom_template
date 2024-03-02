

<template>
  <div class="login-container">
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="email" id="email" v-model="email" placeholder="メールアドレス" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="password" placeholder="パスワード" required>
      </div>
      <button class="login-button" @click="handleLogin">ログイン</button>
    </form>
    <div v-if="responseData">
      <h3>レスポンスデータ:</h3>
      <pre>{{ responseData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      responseData: null
    };
  },
  methods: {
    handleLogin() {
      const data = { email: this.email, password: this.password };
      const params = new URLSearchParams(data);
      const url = `http://localhost:3000/callout/list/${params}`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.responseData = data; // レスポンスデータをセット
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
        });
    }
  }
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  padding: 20px;
}

.login-container h2 {
  color: #555D6D;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
}

.form-group input {
  width: 100%; /* テキストボックスの幅を親要素に合わせる */
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box; /* paddingとborderを幅に含める */
}

.login-button {
  width: 100%;
  background-color: #6D88BA; /* ボタンの背景色 */
  color: white; /* テキストカラー */
  padding: 10px 20px; /* パディング */
  border: none; /* ボーダーなし */
  border-radius: 5px; /* 角丸 */
  cursor: pointer; /* カーソルをポインターに変更 */
  transition: background-color 0.3s, transform 0.2s; /* トランジション効果 */
}
</style>