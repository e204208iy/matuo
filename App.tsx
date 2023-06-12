import './App.css';
import Header from './header';
import Main from "./main"
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import StepladderPage from './VideoPage/stepladderPage';
import HelmetPage from './VideoPage/helmetPage';
import ClothesPage from './VideoPage/clothesPage';

function App() {
  
  return (
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/stepladderPage" element={<StepladderPage />} />
      <Route path="/helmetPage" element={<HelmetPage />} />
      <Route path="/clothesPage" element={<ClothesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
