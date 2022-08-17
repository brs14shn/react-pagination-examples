import './App.css';
import axios from "axios"
import {useState,useEffect} from "react"
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts,setPosts] =useState([])
  const [loading,setLoading ] =useState(false)
  const [currentPage,setCurrentPage] =useState(1)
  const [postsPerPage,setPostsPerPage] =useState(10)
  
  //? GET CURRENT POST

const indexOfLastPost=currentPage*postsPerPage
// console.log(indexOfLastPost);
const indexOfFirstPost=indexOfLastPost-postsPerPage
// console.log(indexOfFirstPost);
const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

const totalPages=posts.length;
console.log(totalPages);

// console.log(currentPosts);


 useEffect(() => {
  const fetchPosts=async()=>{
    setLoading(true)
    const res =await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(res?.data)
    setLoading(false)
    
  }
  fetchPosts()
 }, [])

console.log(posts);


//? Change pages

const paginate=(number)=>setCurrentPage(number)
 


  return (
    <div className="container mt-5 text-center">
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
}

export default App;
