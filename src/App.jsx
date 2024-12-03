import Aboutsection from './Components/Aboutsection'
import Collectionsection from './Components/Collectionsection'
import Featuredproducts from './Components/Featuredproducts'
import Footer from './Components/Footer'
import Herosection from './Components/Herosection'
import Navbar from './Components/Navbar'
import Showsection from './Components/Showsection'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <Featuredproducts />
      <Collectionsection />
      <Showsection />
      <Aboutsection />
      <Footer />
    </>
  )
}

export default App
