<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px white;
  border: solid 4px transparent;
  border-radius: 14px;
}

::-webkit-scrollbar-button {
  display: none;
}

body {
  position: relative;
  width: 100vw;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  scroll-behavior: smooth;
  overflow: overlay;
  font-family: "Lato", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  color: white;
  text-align: center;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  background-image: url("@/assets/background.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
}
</style>
