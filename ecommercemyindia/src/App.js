

import Navbar from './Components/Navbar';
import CopyrightBar from './Components/CopyrightBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AllRoutes />
      
      <Footer />
      <CopyrightBar />
    </div>
  );
}

export default App;
