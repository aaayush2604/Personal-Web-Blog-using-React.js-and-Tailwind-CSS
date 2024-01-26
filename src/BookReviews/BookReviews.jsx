import './BookReviews.css';
import data from './data.json';


const ReviewObject=()=>{
    return<>
      <div className="BookCard">
    <div className="BookCardInner">
      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
    </div>
    <div className="TextBox">
      <h2 className="BookTitle">
        The Sun & The Star
      </h2>
      <h5 className="BookAuthor">
        Tania Andrew
      </h5>
      <div className="GenreContainer">
      <img alt="Tania Andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        className="Genre" />
      <img alt="Tania Andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        className="Genre" />
      <img alt="Tania Andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        className="Genre" />
      </div>
    </div>
  </div>  
    </>
}
  
const ReviewObjectList=()=>{
    return <main className='ObjectGrid'>
      <ReviewObject/>
      <ReviewObject/>
      <ReviewObject/>
      <ReviewObject/>
      <ReviewObject/>
      <ReviewObject/>
    </main>
}
  
const BookReviews=()=>{
    return <>
      <h1 className='PageTitle'>Book Reviews</h1>
      <ReviewObjectList/>
    </>
}

export default BookReviews;
   