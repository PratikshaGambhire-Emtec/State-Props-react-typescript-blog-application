import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuoteApp from './QuoteApp';
import reportWebVitals from './reportWebVitals';

const randomQuotes: string[] = [
  "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!",
  "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
  "The best thing about the future is that it comes one day at a time.",
  "The only mystery in life is why the kamikaze pilots wore helmets.",
  "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
  "The difference between stupidity and genius is that genius has its limits"
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuoteApp quotes={randomQuotes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
