import './BookReviews.css';
import data from './data.json';
import {FaBeer, FaStar} from "react-icons/fa";


const ReviewObject=({Title,Author,Image,Genre})=>{

    return<>
      <div className="BookCard">
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
        {Genre.map((gen)=>{
          return <img alt={gen} src={gen+'.png'} className='Genre'/>
        })}
      </div>
    </div>
  </div>  
    </>
}
  
const ReviewObjectList=()=>{
    return <main className='ObjectGrid'>
      {
        data.map((Book,index)=>{
          return <ReviewObject  key={index} Title={Book.Title} Author={Book.Author} Image={Book.Image} Genre={Book.Genre}/>
        })
      }
    </main>
}
  
const BookReviews=()=>{
    return <>
      <h1 className='PageTitle'>Book Reviews</h1>
      <ReviewObjectList/>
    </>
}

export default BookReviews;
   