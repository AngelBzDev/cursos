import { shallow } from 'enzyme';  
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente GifGrid', () => {
   
   const category = 'Pitufos';
   /* test('Debe de mostrar correctemente el componente', () => {
      //const wrapper = shallow(<GifGrid category={category}/>);
      expect(wrapper).toMatchSnapshot();
   }) */

   test('debe de mostrar items cuando se cargan imagenes useFetchGifts', () => {
      const gifs = [{
         id: '12ji',
         url: 'https://localhost/xdxdxd'
      }]

      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: true
      })

      const wrapper = shallow(<GifGrid category={category}/>)
      
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('p').exists()).toBe(true);
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

   })
   
})
