import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { seedDatabase } from './seed_products';

function Root() {
  useEffect(() => {
    seedDatabase();
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
