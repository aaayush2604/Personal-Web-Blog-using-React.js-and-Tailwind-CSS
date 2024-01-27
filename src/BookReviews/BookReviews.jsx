import './BookReviews.css';
import data from './data.json';
import {useState} from 'react';


const ReviewObject=({id,Title,Author,Image,Genre})=>{

  const ClickFunction=(Id)=>{
    const Item=data.filter((book)=>book.id===Id)[0];
    console.log(Item);
  }

    return<>
      <div className="BookCard" onClick={()=>ClickFunction(id)}>
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
    </>
}
  
const ReviewObjectList=()=>{

    

    return <main className='ObjectGrid'>
      {
        data.map((Book,index)=>{
          return <ReviewObject id={Book.id} key={index} Title={Book.Title} Author={Book.Author} Image={Book.Image} Genre={Book.Genre}/>
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
   