import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Subscribe from "./components/Subscribe/Subscribe"



function App() {
  
  return (
    <main className=" font-poppins overflow-x-hidden bg-[white] text-dark">
        <Hero />
        <Services />
        <Banner />
        <Subscribe />
    </main>
  )
}

export default App
