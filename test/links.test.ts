import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Links from '../src/components/Links.astro';

test('Array of links', async () => {
	const container = await AstroContainer.create();
	const component = await container.renderToString(Links);

	expect(component.toString()).toContain('YouTube');
	expect(component.toString()).toContain('data-icon="youtube"');
	expect(component.toString()).toContain('Twitch');
	expect(component.toString()).toContain('data-icon="twitch"');
	expect(component.toString()).toContain('X');
	expect(component.toString()).toContain('data-icon="twitter"');
	expect(component.toString()).toContain('Instagram');
	expect(component.toString()).toContain('data-icon="instagram"');
	expect(component.toString()).toContain('GitHub');
	expect(component.toString()).toContain('data-icon="github"');
})