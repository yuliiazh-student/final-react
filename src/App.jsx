import { Outlet } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';


function App() {

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />

      </div>
    </>

  )
}

export default App
