
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header"
import SalesCard from "./Components/SalesCard"

function App() {
  return (
      <>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
            </div>
            </section>
            </main>
          </>
          )
}
          export default App
