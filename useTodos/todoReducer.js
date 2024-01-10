
export const todoReducer = (initalState = [], action) => {
  switch (action.type) {
    case '[todo]: add todo':
      return [...initalState, action.payload];
    case '[todo]: delete todo':
      return initalState.filter(todo => todo.id !== action.payload);
    case '[todo]: toggle todo':
      return initalState.map(todo => {
        console.log('toogle id :', action.id)
        if ( todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
          
        return todo;
      });
    default:
      return initalState;
  }
}
