<template>
  <header>
    <h1>CMS</h1>
  </header>

  <nav>
    <ul>
      <li><a href="//localhost:3001">Web</a></li>
      <li><a href="//localhost:3002">Admin</a></li>
    </ul>
    <hr />
    <ul>
      <li><router-link :to="{path: '/'}">Home</router-link></li>
      <li><router-link :to="{path: '/about'}">About</router-link></li>
      <li><router-link :to="{path: '/profile'}">Profile</router-link></li>
    </ul>
  </nav>

  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
ul {
  display: flex;
  gap: 4px;
  list-style: none;
}
a {
  padding: 20px;
}
a.router-link-active {
  border: 1px solid red;
}
</style>