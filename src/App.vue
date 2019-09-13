<template>
  <div class="app">
    <div class="nav">
      <div class="float-left">
        <router-link class="nav-item float-left" to="/">
          <p><b>Dungeon</b>Guide</p>
        </router-link>
        <router-link class="nav-item float-left" to="/campaigns">
          <p>Campaigns</p>
        </router-link>
        <router-link class="nav-item float-left" to="/about">
          <p>About</p>
        </router-link>
      </div>
      <div class="float-right">
        <router-link class="nav-item float-right" to="/login">
          <p>login</p>
        </router-link>
      </div>
       
    </div>
    <router-view />
  </div>
</template>

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
    line-height: 10px;
    color: rgb(241, 241, 241);
  }

  .nav-item:hover {
    background-color: rgb(104, 104, 104);
  }

  p {
    font-size: 18px;
    float: left;
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
</style>
