import { combineReducers, createStore } from 'redux';

//import { searchResultReducer } from './search/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
};

export interface StoreStateType {

  //   search: ResultState;
}

const rootReducer = combineReducers({

  //search: searchResultReducer
});

export type AppState = ReturnType<typeof rootReducer>;

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require(`redux-logger`);
//   middlewares.push(logger);
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function() {
  //   const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(persistedReducer);
  console.log(store.getState());
  // @ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
}
