import { shallowMount } from '@vue/test-utils'
import BlockTable from '@/Blog/views/BlockTable.vue'
import flushPromises from 'flush-promises';

function factory() {
  return shallowMount(BlockTable, {
    stubs: ['v-pagination', 'v-data-table']
  });
}
describe('BlockTable.vue', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should match snapshot', async () => {
    const wrapper = factory();
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  })
  // it('Test function get list data block', async () => {
  //   const wrapper = factory();
  //   await flushPromises();
  //   await wrapper.vm.retrieveBlog();
  //   expect(retrieveBlog).toHaveBeenCalled();
  // });
})
