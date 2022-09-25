import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&amp;display=swap" rel="stylesheet" />

      <meta name="theme-color" content="#06163a" />
      <meta name="title" content="Minarox" />
      <meta name="description" content="Créateur de contenu depuis trop longtemps." />
      <meta name="keywords" content="Vidéos, Stream, Live, Youtube, Twitch, Best-of, compilations, montage, projets, maintenance, site web," />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="Minarox" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://minarox.fr/" />
      <meta property="og:site_name" content="Minarox" />
      <meta property="og:title" content="Minarox" />
      <meta property="og:description" content="Créateur de contenu depuis trop longtemps." />
      <meta property="og:image" content="/favicon/banner.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://minarox.fr/" />
      <meta name="twitter:site" content="@Minarox_" />
      <meta property="twitter:title" content="Minarox" />
      <meta property="twitter:description" content="Créateur de contenu depuis trop longtemps." />
      <meta property="twitter:image" content="/favicon/banner.webp" />

      <link rel="icon" href="/favicon/favicon-light.ico" media="(prefers-color-scheme:no-preference)" />
      <link rel="icon" href="/favicon/favicon-light.ico" media="(prefers-color-scheme:dark)" />
      <link rel="icon" href="/favicon/favicon-dark.ico" media="(prefers-color-scheme:light)" />
      <link rel="icon" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
      <link rel="icon" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
