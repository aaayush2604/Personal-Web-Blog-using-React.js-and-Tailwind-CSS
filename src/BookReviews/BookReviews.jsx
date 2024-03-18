import './BookReviews.css';
import data from './data.json';
import {useState} from 'react';
import {BrowserRouter as Router,Route,Switch,Link,useParams} from 'react-router-dom';

const Review=()=>{
  const {id}=useParams();
  const book=data.filter((A)=>A.id==id);
  return <>
    <div className='ReviewText'>
      <h1>{book[0].Title}</h1>
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
   