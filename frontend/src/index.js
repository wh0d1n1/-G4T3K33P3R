// scroll bar
import 'simplebar/src/simplebar.css';
import 'react-image-lightbox/style.css';
import 'react-quill/dist/quill.snow.css';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./context/AuthContext";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <HelmetProvider>
    <BrowserRouter>
    <AuthProvider>
      <Provider store={store}>
        <App/>
      </Provider>
      </AuthProvider>
    </BrowserRouter>
  </HelmetProvider>
);

serviceWorker.unregister();
reportWebVitals();
