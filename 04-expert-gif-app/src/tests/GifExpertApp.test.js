import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp'

describe('Pruebas a GifExpertApp', () => {
   test('Debe mostrarse correctamente', () => {
      const wrapper = shallow(<GifExpertApp />);
      expect(wrapper).toMatchSnapshot();
   })
   test('Debe mostrar la lista de categorias', () => {
      
      const categories = ['Pokeon', 'Superman', 'Spider man'];
      const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
      
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })
   
})

