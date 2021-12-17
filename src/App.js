import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home, Owner, ItemNft, NotFound } from './components/pages';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/owner/:address" element={<Owner />} />
            <Route path="/item/:address/:token" element={<ItemNft />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
