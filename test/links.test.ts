import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Links from '../src/components/Links.astro';

const social = [
	{
		name: "YouTube",
		url: "https://youtube.com/@Minarox",
	},
	{
		name: "Twitch",
		url: "https://twitch.tv/minarox",
	},
	{
		name: "X",
		url: "https://x.com/Minarox_",
		icon: "x-twitter"
	},
	{
		name: "Instagram",
		url: "https://instagram.com/minarox_",
	},
	{
		name: "GitHub",
		url: "https://github.com/Minarox",
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
		expect(component).toContain(`data-icon="fa6-brands:${link.icon || link.name.toLowerCase()}"`);
	}
})