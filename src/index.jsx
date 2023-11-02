import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <h1>Karaoke</h1>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
