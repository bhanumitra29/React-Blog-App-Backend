import React from 'react'
import '../App.css'
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Bollywood from '../Components/Bollywood';
import Technology from '../Components/Technology';
import Hollywood from '../Components/Hollywood';
import Fitness from '../Components/Fitness';
import Food from '../Components/Food';
import Home from '../Components/Home';
// import ContextCompo from '../Store/ContextCompo'
import DynamicContent from './DynamicContent';
import MobileDropdownMenu from '../Components/MobileDropdownMenu';

const DataCompo = () => {
        const hrStyles = {
          backgroundColor: '#E5E5E5',   
          height: '2px',            
          border: 'none',           
          margin: '15px 0',         
        }
  return (
    <>
   
    <div>

            <BrowserRouter>
            
          {/* <div className='mainheadmobile'>
          <div><span id='the'>The</span> <span className='siren'>Siren</span></div>
          
          <button className='buttoninDynamic'>Get Started</button>
          </div> */}

            {/* <div className="mobile-menu">
            <MobileDropdownMenu />
          </div> */}

          {/* <div className='mainheadmobile'> */}
              <div className='sirenmain'>
                    {/* <NavLink style={{ color: "black", textDecoration: "none" }} to="/"> */}
                          <div className='sirenHead'>
                        <h1 style={{  margin: "0px 0px 10px 0px", padding: 0 }}>
                        <span id='the'>The</span> 
                        <span className='sirenBody'>Siren</span></h1>
                    {/* </NavLink> */}
                    </div>
                <div className='buttonMain'>
                <button className='buttoninDynamic'>Get Started</button>
                </div>
              </div>
            {/* </div> */}
        <div className='mobile-menu'>
            <MobileDropdownMenu />
            </div>
            
          

 
          
                <div className="navbar">
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/' className="link">Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/bollywood' className="link">Bollywood</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/technology' className="link">Technology</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/hollywood' className="link">Hollywood</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/fitness' className="link">Fitness</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/food' className="link">Food</NavLink>
                </div>
                <hr style={hrStyles}/>
            {/* <ContextCompo> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bollywood" element={<Bollywood />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/hollywood" element={<Hollywood />} />
                <Route path="/fitness" element={<Fitness />} />
                <Route path="/food" element={<Food />} />
                <Route path ="dynamic/:cat/:id" element = {<DynamicContent />} />
            </Routes>
            {/* </ContextCompo> */}

            </BrowserRouter>

           
        </div>

    </>
  )
}

export default DataCompo