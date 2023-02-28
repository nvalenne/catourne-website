<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .navbar {
    background: black;
    height: 80px;
    width: 100%;
  }

  .navbar-list {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }
  .navbar-list li {
    margin: 0 10px 0 10px;
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .navbar-list a.router-link-exact-active {
    color: #42b983;
  }
</style>