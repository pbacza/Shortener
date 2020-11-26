import { mount, shallowMount } from '@vue/test-utils';
import LinkItem from '@/components/LinkItem.vue';

describe('LinkItem.vue', () => {
	it('renders link', async () => {
		const value = 'test';
		const wrapper = shallowMount(LinkItem, {
			propsData: { link: value },
		});

		expect(wrapper.text()).toMatch(value);
	});
});
