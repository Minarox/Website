import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.scss?inline';
import {Youtube} from "~/components/icons/youtube";
import {Twitch} from "~/components/icons/twitch";
import {Twitter} from "~/components/icons/twitter";
import {Discord} from "~/components/icons/discord";
import {Instagram} from "~/components/icons/instagram";
import {Github} from "~/components/icons/github";
import {Logo} from "~/components/icons/logo";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main>
      <section>
        <Logo />
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
          <Youtube />
        </a>
        <a href="https://twitch.tv/minarox" title="Twitch">
          <Twitch />
        </a>
        <a href="https://twitter.com/Minarox_" title="Twitter">
          <Twitter />
        </a>
        <a href="https://discord.com/invite/jEF8bDc" title="Discord">
          <Discord />
        </a>
        <a href="https://instagram.com/minarox_" title="Instagram">
          <Instagram />
        </a>
        <a href="https://github.com/Minarox" title="GitHub">
          <Github />
        </a>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Bientôt... | Minarox.fr',
};
