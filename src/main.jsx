import App from './App.jsx';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//CSS imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CookiesProvider defaultSetCookies={{ path: '/' }}>
      <App />
    </CookiesProvider>
  </BrowserRouter>

)
