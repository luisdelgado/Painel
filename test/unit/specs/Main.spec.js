import Main from '@/components/Main'
import { shallowMount } from '@vue/test-utils'

describe('Main.vue', () => {
  it('should render correct contents', () => {

    // given
    const wrapper = shallowMount(Main, {
      propsData: {
        msg: 'CCM Elefante de Olinda',
      },
    });

    // when
    const title = wrapper.find('.title h1').text();

    // then
    expect(title).toContain('CCM Elefante de Olinda');
  })
})
