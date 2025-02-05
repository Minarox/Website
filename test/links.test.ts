import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Links, { type Props } from '../src/components/Links.astro';

const social: Props['social'] = [
	{
		name: "YouTube",
		url: "https://youtube.com/@Minarox"
	},
	{
		name: "X",
		url: "https://x.com/Minarox_",
		icon: "fa6-brands:x-twitter"
	},
	{
		name: "Email",
		url: "mailto:contact@minarox.fr",
		icon: "mdi:envelope"
	}
]

test('Array of links', async () => {
	const container = await AstroContainer.create();
	const component = await container.renderToString(Links, {
		props: {
			social: social
		}
	});

	for (const link of social) {
		expect(component).toContain(link.name);
		expect(component).toContain(link.url);
		expect(component).toContain(`data-icon="${link.icon || `fa6-brands:${link.name.toLowerCase()}`}"`);
	}
})