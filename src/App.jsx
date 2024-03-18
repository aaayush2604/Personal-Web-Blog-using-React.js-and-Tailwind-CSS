import { useState, useEffect } from 'react'
import '@fontsource/gloria-hallelujah';
import BookReviews from './BookReviews';
import Animations from './Animations';
import ChatPrompt from './ChatPrompt';



const Home=()=>{
  const [width, setWidth]=useState(window.innerWidth);

  useEffect(()=>{
    console.log(width);
  },[width])

  window.addEventListener('resize',()=>{
    setWidth(window.innerWidth);
  });


  return <div className="front">
    <div className='mainHeader'>
    <div className="LandingPage">
      <h1 className="HomeTitle">The Nerd Inside Me</h1>
      <p className="HomeIntroText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, suscipit magni. Aperiam expedita dicta rerum recusandae beatae labore tempore totam?</p>
    </div>
    {(width>900) && <Animations/>}
    </div>
    <div className="waves">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="orange" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,256C840,256,960,224,1080,224C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    <path fill="#7b341e"  fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    
    </svg>
    </div>
  </div>
}

const CurrentRead=()=>{
  return <>
  <div className="CurrentReadContainer">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave2 m-0'><path fill="orange" fillOpacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,149.3C274.3,160,343,160,411,138.7C480,117,549,75,617,69.3C685.7,64,754,96,823,112C891.4,128,960,128,1029,133.3C1097.1,139,1166,149,1234,154.7C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path><path fill="#ffffff" fillOpacity="1" d="M0,192L40,208C80,224,160,256,240,272C320,288,400,288,480,288C560,288,640,288,720,282.7C800,277,880,267,960,250.7C1040,235,1120,213,1200,218.7C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
  <h1 className="CRTitle">Currently Reading</h1>
    <div className="CurrentRead">
      <img src='downloads.jpg' alt="Curreny reading" className="CRImage" />
      <div className="CRdesc">
      Is it just me or does everyone read Murakami because of how he leaves you confused? Like he sparks emotion in you but it is always accompanied by this weird feeling that you really can't place. But the thing is.....I think I actually love that!!

#murakami #menwithoutwomen #haruhimurakami #bookstagramindia #bookstagram #readalot
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="orange" fillOpacity="1" d="M0,224L34.3,229.3C68.6,235,137,245,206,240C274.3,235,343,213,411,218.7C480,224,549,256,617,256C685.7,256,754,224,823,208C891.4,192,960,192,1029,176C1097.1,160,1166,128,1234,122.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
<path fill="#ffffff" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,144C320,149,400,171,480,176C560,181,640,171,720,144C800,117,880,75,960,90.7C1040,107,1120,181,1200,218.7C1280,256,1360,256,1400,256L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    </svg>
  </div>
  </>
}



const ContactCard=()=>{
  return <div className="Contact">
    <div className="InstaHandle">
      <div className="handle">
        <a href="https://www.instagram.com/thenerdinsideme/" target="_blank">@thenerdinsideme</a>
      </div>
      <img src="dp.jpg" className="dp"/>
    </div>
    <div className="whatFor">
      Follow the Page for 
      <ul className="List">
        <li>Book Reviews</li>
        <li>Recommendations</li>
        <li>All the latest news on the reading world..</li>
      </ul>
    </div>
  </div>
}

function App() {
  return <><Home/>
  <BookReviews/>
  <CurrentRead/>
  <ChatPrompt/>
  <ContactCard/>
  </>
}

export default App
