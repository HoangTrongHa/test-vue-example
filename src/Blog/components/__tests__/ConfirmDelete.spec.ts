import { shallowMount } from '@vue/test-utils'
import ConfirmDelete from '@/Blog/components/ConfirmDelete.vue'
import flushPromises from 'flush-promises';

function factory() {
  return shallowMount(ConfirmDelete, {
    stubs: ['v-row', 'v-dialog', 'v-card-title', 'v-card-actions', 'v-spacer', 'v-btn']
  });
}
describe('ConfirmDelete.vue', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should match snapshot', async () => {
    const wrapper = factory();
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  })
})
