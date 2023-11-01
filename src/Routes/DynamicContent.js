// import React, { useContext } from 'react'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { Store } from '../Store/ContextCompo';
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaShare, FaHeart} from 'react-icons/fa'

const DynamicContent = () => {
//   let abc = document.getElementsByClassName('navbar')[0]
//   let abcd = document.getElementsByClassName('buttonMain')[0]
//   let abcde = document.getElementsByClassName('mobile-menu1')[0]
//   abcd.classList.add ('displayB')
//   abc.classList.add('displayN')
// abcde.classList.add('displayNN')

// var nav = document.getElementsByClassName("navbar")[0];
//   nav.classList.add("navdisplay");
//   var siren = document.getElementsByClassName("sirenHead")[0];
//   siren.classList.add("sirenleft");
  
    const { id, cat } = useParams();
    // const [contextData] = useContext(Store);
    const navigate = useNavigate();
    const location = useLocation();

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

  


    const selectedItem = data.find((item) => item.id === parseInt(id));


    // const handeBack = () => {
        // navigate(location.state.referrer);
        // navigate(`/${cat}` || '/');
        // navigate(location.state.referrer || '/');
        
    // }

    const handeBack = () => {


    //   var nav = document.getElementsByClassName("navbar")[0];
    // nav.classList.remove("navdisplay");
    // var siren = document.getElementsByClassName("sirenHead")[0];
    // siren.classList.remove("sirenleft");


        if (location.state && location.state.referrer) {
            navigate(location.state.referrer);
          } else {
            navigate('/');
      };

      
    //  abcd.classList.remove('displayB')
    //  abc.classList.remove('displayN')
    // //  abc.classList.add('navbar')
    // abcde.classList.remove('displayNN')

    }

   
        const hrStyles = {
          backgroundColor: '#E5E5E5',   
          height: '2px',            
          border: 'none',           
          margin: '15px 0',        
        }
    

  return (
    <div className='dynamicmainparent'>
      <div className='parentparent'>
      <div className='likeandshare'>
        <span><FaHeart />  Like</span>
        <span><FaShare />  Share</span>
      </div>
      <div className='dynamicParent'>
      {/* <h2>Dynamic Content Page</h2> */}
      
      {selectedItem ? (
        <div>
          <h2>{selectedItem.heading}</h2>
          <div className='logomainparent'>
          <div className='iconsDisplay'>
              <FaFacebook className='icons facebook' />
              <FaTwitter className='icons twitter' />
              <FaInstagram className='icons instagram' />
              <FaYoutube className='icons youtube' />
              <FaGithub className='icons github' />         
            </div>
            <div className='logoinnerparent'>
              <img className='logoedit' src='https://avatars.githubusercontent.com/u/5465207?v=4' alt='Not Fount' />
              <p>Bhanu Mitra<br/>
                Nov 29, 2021
              </p>

            </div>
            <div className='iconsDisplay1'>
              <FaFacebook className='icons facebook' />
              <FaTwitter className='icons twitter' />
              <FaInstagram className='icons instagram' />
              <FaYoutube className='icons youtube' />
              <FaGithub className='icons github' />         
            </div>
          </div>
          <img className='techimageleft1' src={selectedItem.imageUrl} alt='not found' />
          <p>{selectedItem.innertext}</p>
        </div>
      ) : (
        <p>No content found for ID: {id}</p>
      )}
      </div>
      </div>

      
      <div className='dynamicParent1'>
      <span><FaHeart />  Like</span>
      <hr className='lasthr'/>
      <div className='logoinnerparent'>
              <img className='logoedit1' src='https://avatars.githubusercontent.com/u/5465207?v=4' alt='Not Fount' />
              <p>WRITTEN BY <br/>
                <b>Bhanu Mitra</b><br/>
                Nov 29, 2021
              </p>

            </div>
            <hr className='lasthr'/>
            </div>
        <div className='buttonparent'>
      <button onClick={handeBack} className='backbutton'>Back</button>
      </div>

        <div className='more'>
      <h2>More from The Siren</h2>
        <hr style={hrStyles}/>
        </div>
      <div className='theLatest'>
   
<div className='dynamicExtra'>
      {data.filter((item) => {return item.cat === cat}).slice(0, 4).map((item,index)=>(
        <div key={index} className='innerparent1234'>
        <div className='morefromwidth'>
        <h4>{item.heading}</h4>
        <p><span className='travel'>Bhanu Mitra</span> </p>
        </div>

        <div>
          
        <Link to= {`/dynamic/${item.cat}/${item.id}`} state={{ referrer: location.cat === cat }}>
        <img className='techimageleft1234' src ={item.imageUrl} alt ='not found' />
        </Link>
        </div>
        
        
      </div>
      ))}

      </div>
      

      {data.filter((item) => {return item.cat === cat}).slice(0, 3).map((item,index)=>(
        <div key={index} className='innerparent12345'>
        <Link to= {`/dynamic/${item.cat}/${item.id}`} state={{ referrer: location.cat === cat }}>
        <img className='techimageleft1' src ={item.imageUrl} alt ='not found' />
        </Link>
        <h4>{item.heading}</h4>
        <div className='logoinnerparent'>
              <img className='logoedit' src='https://avatars.githubusercontent.com/u/5465207?v=4' alt='Not Fount' />
              <p>Bhanu Mitra<br/>
                Nov 29 . 4 Min read
              </p>

            </div>
        </div>
        

      ))}
      </div>
      </div>
   
  )
}

export default DynamicContent
