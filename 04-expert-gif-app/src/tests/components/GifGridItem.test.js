import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

   const title = 'Los simpson';
   const url = 'https://unaimagen_equis';
   const wrapper = shallow(<GifGridItem title={title} url={url}/>)
   
   test('Debe de mostrar el componente correctamete', () => {
      expect(wrapper).toMatchSnapshot();
   })
   
   test('Debe de tener un parrafo con el titulo', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   })

   test('Debe de tener la imagen la url y alt de los props', () => {
      const img = wrapper.find('img');
      expect(img.props().src).toBe(url);
      expect(img.props().alt).toBe(title);
   })
   
   test('Debe de tener la clase card', () => {
      const div = wrapper.find('div');
      expect(div.props().className).toBe('card');
   })
   

})
