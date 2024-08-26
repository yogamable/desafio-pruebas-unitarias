import { mount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

describe('Test de vista About', () => {
  it('Test 1: Matchea el snapshot de la vista About correctamente', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('Test de vista Contact', ()=>{
  it('Test 2: Matchea el snapshot de la vista Contact correctamente', () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
})
