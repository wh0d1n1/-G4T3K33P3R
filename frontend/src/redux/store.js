import { createStore, applyMiddleware, combineReducers } from 'redux';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, registerReducer } from './reducers/authReducers';
import { usersReducer } from './reducers/usersReducers';
import chatReducer from './slices/chat';
// import calendarReducer from './slices/calendar';
import mailReducer from './slices/mail';



const reducer = combineReducers({
  userLogin: loginReducer,
  userRgister: registerReducer,
  chat: chatReducer,
  listUser: usersReducer,
//   calendar:calendarReducer,
  mail: mailReducer

});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools({ mageAge: 200 })(applyMiddleware(...middleware)));


const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };

