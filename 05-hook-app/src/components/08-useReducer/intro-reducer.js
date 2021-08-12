const initialState = [ {
   id: 1,
   todo: 'Comprar unos chetos',
   done: false
} ];

const todoReducer = (state = initialState, action) => {

   if (action?.types === 'agregar') {
      return [ ...state, action.payload ];
   }
   return state;

};

let todos = todoReducer();

const newTodo = {
   id: 1,
   todo: 'Comprar unos dulces',
   done: false
};

const agregarAction = {
   types: 'agregar',
   payload: newTodo
};

todos = todoReducer(todos, agregarAction);

console.log(todos);
