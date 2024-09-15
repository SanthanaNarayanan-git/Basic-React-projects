import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/card'
import data from './data'


export default function App(){
  const cards= data.map(item => {
    return(
      <Card
      img={item.coverImg}
       rating={item.stats.rating} 
       reviewCount={item.stats.reviewCount}
       location = {item.location}
       title = {item.title}
       price={item.price}

       /**item = {item} */
     />

    )
  })
  return(
    <div className="app">
      <Navbar />
      <Hero />
      <section className='cardssec'>
      {cards}
      </section>

    </div>
  )
}
