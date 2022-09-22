
import './App.css';
//import cartReducer from './Redux/reducer/cartReducer';
//import {createStore} from 'redux'
// createStore is used to know for the compiler that any reducer is our store
import { Provider } from 'react-redux';
// provider is used to pass data from reducer to component 

import store from './Redux/reducer/store';

import MyRoute from './MyRoute';

function App() {

  //const store = createStore(cartReducer)
  return (
    <Provider store={store}> 
      <MyRoute/> 
    </Provider>
  );
}

export default App;
