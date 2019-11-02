<template>
  <div class="app">
    <div class="nav">
      <div class="float-left">
        <router-link class="nav-item float-left title" to="/">
          <p><b>Dungeon</b>Guide</p>
        </router-link>
        <router-link class="nav-item float-left button-Text" to="/campaigns">
          <p>Campaigns</p>
        </router-link>
        <router-link class="nav-item float-left button-Text" to="/about">
          <p>About</p>
        </router-link>
      </div>
      <div class="float-right">
        <Login/>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Login from "@/components/Login.vue"
export default {
  components: {
    Login
  }
}

</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}

.nav {
  width: 100%;
  height: 50px;
  overflow: hidden;

  background-color: rgb(39, 38, 38);
  .nav-item {
    height: 50px;  
    padding-left: 10px;
    padding-right: 10px;
    
    color: rgb(241, 241, 241);
  }

  .nav-item:hover {
    background-color: rgb(104, 104, 104);
  }

  .button-Text {
    font-size: 15px;
    line-height: 18px;
    float: left;
    text-decoration: none;
  }

  .title {
    font-size: 18px;
    line-height: 10px;
    float: left;
    text-decoration: none;
  }
}

.float-left {
  margin-right: 20px;
  float: left;
}

.float-right {
  margin-left: 20px;
  float: right;
}

.login-Button {
  background-color: rgb(39, 38, 38); 
  border: none;
}
</style>
