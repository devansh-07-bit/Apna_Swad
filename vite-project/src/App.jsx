import React from 'react'
import Navbar from './components/Navbar'
import Front from './components/Front';
import About from './components/About';
import Testimonials from './components/Testimonials';

export const App = () => {
  
  return (
    <div> 
      <Navbar/>
      <Front/>
      <About/>
      <Testimonials/>
    </div>
    
  )

}
export default App;