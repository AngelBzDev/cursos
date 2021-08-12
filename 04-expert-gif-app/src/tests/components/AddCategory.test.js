import { shallow } from "enzyme";
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {

   const setCategories = jest.fn();
   let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

   beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories}/>);
   })

   test('Debe de mostrarse corectamente', () => {
      expect(wrapper).toMatchSnapshot();
   })

   test('Debe de cambiar el input', () => {
      const inp = wrapper.find('input'); 
      const value = 'El bicho';
      inp.simulate('change', {target: value});
      
   })

   test('No debe de postear la informacion con submit', () => {
      wrapper.find('form').simulate('submit', { preventDefault(){} });
      expect(setCategories).not.toHaveBeenCalled();
   })

   test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
      const value = 'El bicho';
      const inp = wrapper.find('input');
      
      inp.simulate('change', {target: {value}});
      wrapper.find('form').simulate('submit', { preventDefault(){} });
      expect(setCategories).toHaveBeenCalled();
      expect(setCategories).toHaveBeenCalledTimes(1) //Validar las veces que se llama la funcion
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) //Validar el tipo de dato que recibe la funcion
      expect(inp.prop('value')).toBe('');
   })
   
})
