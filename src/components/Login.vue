<template>
    <div class="login-Container">
        <button class="Button">
          <p>register</p>
        </button>
        <button class="Button">
          <p>login</p>
        </button>
        <input v-model="Username"> 
        <input v-model="Password">           
    </div>
</template>

<script>
export default {
    name: "Login",
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
.Button {
    background-color: rgb(39, 38, 38); 
    border: none;
    height: 50px;  
    padding-left: 10px;
    padding-right: 10px;
    line-height: 10px;
    color: rgb(241, 241, 241);
}

.Button:hover {
    background-color: rgb(104, 104, 104);
  }
</style>
