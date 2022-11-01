import { shallowMount } from '@vue/test-utils'
import BlockEdit from '@/Blog/components/BlockEdit.vue'
import flushPromises from 'flush-promises';

function factory() {
  return shallowMount(BlockEdit, {
    stubs: ['v-container', 'v-avatar', 'v-text-field', 'v-textarea']
  });
}
describe('BlockEdit.vue', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should match snapshot', async () => {
    const wrapper = factory();
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  })
})
