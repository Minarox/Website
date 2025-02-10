import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Layout from '@layouts/Layout.astro';

test('Main layout', async () => {
	const container: AstroContainer = await AstroContainer.create();
	const component: Response = await container.renderToResponse(Layout);

	expect(component.status).toBe(200);
	expect(component.headers.get('Content-Type')).toBe('text/html');

	const body: string = await component.text();
	expect(body).toContain('<title>Minarox.fr</title>');
	expect(body).toContain('<meta name="robots" content="index, follow">');
	expect(body).toContain('<meta name="description" content="Créateur de contenu depuis trop longtemps.">');
	expect(body).toContain('<meta property="og:title" content="Minarox.fr">');
	expect(body).toContain('<meta property="og:image:alt" content="Minarox.fr banner">');
	expect(body).toContain('<meta name="twitter:title" content="Minarox.fr">');
	expect(body).toContain('<meta name="twitter:description" content="Créateur de contenu depuis trop longtemps.">');
	expect(body).toContain('<meta name="twitter:image:alt" content="Minarox.fr banner">');
	expect(body).toContain('<link rel="sitemap" href="/sitemap-index.xml">');
	expect(body).toContain('<link as="font" crossorigin rel="preload" href="/font/Lato-Regular.ttf" type="font/ttf">');
	expect(body).toContain('<link as="font" crossorigin rel="preload" href="/font/Lato-Bold.ttf" type="font/ttf">');
})