<template>
  <main>
    <section>
      <img
        src="@/assets/logo.svg"
        alt="Logo Minarox"
        width="140"
        height="auto"
      />
      <h1>Minarox</h1>
    </section>
    <section>
      <h2>{{ $t("coming-soon") }}</h2>
      <p>{{ $t("follow-me") }}</p>
    </section>
    <section>
      <a
        href="https://youtube.com/channel/UCznR2syShlluEzWRoD7XZRQ"
        title="YouTube"
      >
        <font-awesome-icon icon="fa-brands fa-youtube" fixed-width />
      </a>
      <a href="https://twitch.tv/minarox" title="Twitch">
        <font-awesome-icon icon="fa-brands fa-twitch" fixed-width />
      </a>
      <a href="https://twitter.com/Minarox_" title="Twitter">
        <font-awesome-icon icon="fa-brands fa-twitter" fixed-width />
      </a>
      <a href="https://discord.com/invite/jEF8bDc" title="Discord">
        <font-awesome-icon icon="fa-brands fa-discord" fixed-width />
      </a>
      <a href="https://instagram.com/minarox_" title="Instagram">
        <font-awesome-icon icon="fa-brands fa-instagram" fixed-width />
      </a>
      <a href="https://github.com/Minarox" title="GitHub">
        <font-awesome-icon icon="fa-brands fa-github" fixed-width />
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped lang="scss">
main {
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 3rem;

  section:nth-child(1) {
    img {
      padding: 0.5rem;
      width: 100%;
      max-width: 140px;
    }

    h1 {
      font-size: 2em;
      font-weight: 700;
    }
  }

  section:nth-child(2) {
    h2 {
      font-size: 1.8em;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.3em;
    }
  }

  section:nth-child(3) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 0 0.2rem;

    a {
      padding: 1rem;
      font-size: 1.8em;
      color: white;
      text-decoration: none;
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
      transform: scale(1.01);
      transition: transform 220ms;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
}
</style>
