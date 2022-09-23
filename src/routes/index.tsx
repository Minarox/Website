import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main>
      <section>
        <img
            src="/public/logo.svg"
            alt="Logo Minarox"
            width="140"
            height="142"
        />
        <h1>Minarox</h1>
      </section>
      <section>
        <h2>Le site web arrive bientôt !</h2>
        <p>En attendant, suis moi sur les réseaux sociaux !</p>
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
  );
});

export const head: DocumentHead = {
  title: 'Bientôt... | Minarox.fr',
};
