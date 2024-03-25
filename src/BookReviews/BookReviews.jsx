import './BookReviews.css';
import data from './data.json';
import {useState} from 'react';
import {BrowserRouter as Router,Route,Switch,Link,useParams} from 'react-router-dom';

const Review=()=>{
  const {id}=useParams();
  const book=data.filter((A)=>A.id==id); 
  return <>
    <div className='ReviewWindow'>
    <div className='ReviewDisp'>
      <h1 className='ReviewTitle'>{book[0].Title}</h1>
      <h3 className='ReviewAuthor'>{book[0].Author}</h3>
      </div>
      
      <div className='ReviewContainer'>
      <img src={book[0].Image} className='ReviewImage'></img>
      <div className='ReviewSection'>
      <p className='ReviewText'>{book[0].Review.substring(0,300)+'...'}<a className='LinktoInstaReview' href={book[0].Link}>Read the Whole Review</a></p>
      <Link to='/' className="px-[2vw] py-0 relative rounded-[30px] group overflow-hidden bg-white text-[#7b341e] inline-block mx-auto text-center border-2 border-black">
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#7b341e] group-hover:h-full opacity-90 justify-center"></span>
      <span className="relative group-hover:text-white text-[2vw]">Return</span></Link>
      </div>
      </div>

    </div>
  </>
}


const ReviewObject=({id,Title,Author,Image,Genre,review, link})=>{
  const [getReview, SetgetReview]=useState(false);

    return<>
    <Link to={`/check${id}`}>
      <div className="BookCard" onClick={()=>SetgetReview(!getReview)}>
    <img src={Image} className="BookCardInner"/>
      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
    <div className="TextBox">
      <h2 className="BookTitle">
        {Title}
      </h2>
      <h5 className="BookAuthor">
        {Author}
      </h5>
      <div className="GenreContainer">
        {Genre.map((gen,index)=>{
          return <img key={index} alt={gen} src={gen+'.png'} className='Genre'/>
        })}
      </div>
    </div>
  </div> 
  </Link>
    </>
}
  
const ReviewObjectList=()=>{
    return <main className='ObjectGrid'>
      {
        data.map((Book,index)=>{
          return <ReviewObject id={Book.id} key={index} Title={Book.Title} Author={Book.Author} Image={Book.Image} Genre={Book.Genre} review={Book.Review} link={Book.Link}/>
        })
      }
    </main>
}
  

const BookReviews=()=>{
    return <>
    <Router>
    <Switch>
    <Route exact path='/check:id'>
      <Review></Review>
    </Route>
      <Route path='/'>
      <h1 className='PageTitle'>Book Reviews</h1>
      <ReviewObjectList/>
      </Route>
      
    </Switch>
    </Router>
    </>
}

export default BookReviews;
   