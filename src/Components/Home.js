// import React, { useContext, useState } from 'react'
import React, { useEffect, useState } from 'react';


// import { Store } from '../Store/ContextCompo'
import "../App.css"
import Slider from './Slider'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SliderSecond from './SliderSecond'

const Home = () => {
  const [number] = useState(2)
    // const [contextData] = useContext(Store)

    
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://nodeserver-api-hl14.onrender.com/api/home");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      setData(user);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  

    function shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
  return (
    <div className='mainHomeParent'>
    <div className='mainHomeClass'>
      
      <Slider />
    </div>
    

    
  <h2 className='headingLatest'>The Latest</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>
        <div className='theLatest'>
         
   

        {shuffleArray(data).slice(0, 3).map((item, index) => {
     return(
       // <div>
       <div key={index} className='innerparent12'>
        {/* <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: shuffleArray(contextData).join('/') }}> */}
        <Link to={`/dynamic/${item.cat}/${item.id}`}>
           <img className='techimageleft1' src ={item.imageUrl} alt ='not found' />
           {/* <div className='headingandouter1'> */}
           </Link>
           <h4>{item.heading}</h4>
           <p>{item.outertext}</p>

           <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
           {/* </div> */}
           
       </div>
       
       // </div>
       
     )
   })}
   {/* <hr className='lasthr'/> */}
 </div>


    <div className='techparent'>
      <div className='leftdiv1'>
        <h2>Latest Articles</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>

        <div className='outertext1'>
        {shuffleArray(data).slice(0, 4).map((item, index) => {
          return(
            <div key={index}>
            <div  className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`}>
                <img className='techimageleft' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter'>
                <h4>{item.heading.split(' ',7).join(' ')}</h4>
                <p>{item.outertext.split(' ',10).join(' ')}</p>
                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
                </div>
                
            </div>
            <hr className='lasthr'/>
            </div>
          )
        })}<br/><br/><br/>
        </div>

        <div className='outertext'>
        {shuffleArray(data).slice(0, 4).map((item, index) => {
          return(
            <div key={index}>
            <div className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`}>
                <img className='techimageleft' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter'>
                <h4>{item.heading}</h4>
                <p>{item.outertext}</p>

                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
                </div>
                
            </div>
            <hr className='lasthr'/>
            </div>
          )
        })}<br/><br/><br/>
        </div>

<div className='mainSliderParent1'>
    <SliderSecond />
    </div>
      </div>


     


      <div className='rightdiv1'>

      <div className='ads1'><h2 className='centered-text'>Advertistement</h2></div>

        <h2>Top Posts</h2>
        <div className="hr-container1">
       <hr className="custom-hr1"/>
        </div>
        <div>


        {shuffleArray(data).slice(0, 1).map((item, index) => {
  return(
    <div key={index}>
      <div className='imagenumber1'>
      <Link to={`/dynamic/${item.cat}/${item.id}`}>
        <img className='techimageright123' src ={item.imageUrl} alt ='not found' />
        </Link>
        <h1 className='toppostsnumber'>1</h1>
        </div>
        <h4>{item.heading}</h4>
        <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
        
    </div>
  )
})}

</div>
<hr/>
{shuffleArray(data).slice(0, 3).map((item, index) => {
            const currentNumber = number + index;
          return(
            <div key={index}>
            <div className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`}>
                <img className='techimageright' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter12'>
                <div>
                <h4>{item.heading}</h4>
                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
                </div>
                <h1 className='toppostsnumber'>{currentNumber}</h1>
                </div>
              
            </div>
            <hr className='lasthr'/>
            </div>

          )
        })}
        
      </div>
      </div>

      <h2 className='headingLatest'>Latest Stories</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>
        <div className='theLatest'>
         
   

        {shuffleArray(data).slice(0, 3).map((item, index) => {
     return(
       // <div>
       <div key={index} className='innerparent12'>
        {/* <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: shuffleArray(contextData).join('/') }}> */}
        <Link className='textdeco' to={`/dynamic/${item.cat}/${item.id}`}>
          <h4>{item.heading}</h4>
           <p>{item.outertext}</p>
           {/* <div className='headingandouter1'> */}
           </Link>
           

           <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
           {/* </div> */}
           
       </div>
       
       // </div>
       
     )
     
   })}
   {/* <hr className='lasthr'/> */}
   
 </div>
 {/* <hr className='lasthr1'/> */}
      <Footer />
      
    </div>
  )
}


export default Home
