// Components
import Navbar from './components/Navbar'
import AppContext from './AppContext'
import Home from './Home/Home'

function App() {
   return (
      <AppContext>
         <div>
            <Navbar />
            <Home />
         </div>
      </AppContext>
   )
}

export default App
