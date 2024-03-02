<template>
  <router-view></router-view>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

img {
  max-width: 100%;
  height: auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 2px 4px #DEE8FC;

  }
  .header .logo {
    display: flex;
    align-items: center;
  }
  .header .logo img {
    width: 300px; /* Adjust as per your image's aspect ratio */
  }
  .header .menu {
    font-size: 50px;
    color: #D9D9D9;
    cursor: pointer;
  }
  .header .navigation {
    display: none; /* This should be toggled with JavaScript */
  }

input {
    border: #F3F3F3 1px solid;
    border-radius: 5px
}

input:focus {
    border: orange 1px solid;
    outline: none;
}
</style>
