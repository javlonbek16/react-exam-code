import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Talkr } from 'talkr';
import App from './App';
import { languagesList } from './i18n';
import Store from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Store>
      <Talkr defaultLanguage='uz' languages={languagesList}>
        <App />
      </Talkr>
    </Store>
  </StrictMode>
);


