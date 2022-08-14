import './App.css';
import axios from "axios"
import {useState,useEffect} from "react"
import Posts from './components/Posts';

function App() {
  const [posts,setPosts] =useState([])
  const [loading,setLoading ] =useState(false)
  const [currentPage,setCurrentPage] =useState(1)
  const [postsPerPage,setPostsPerPage] =useState(10)
  

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


 


  return (
    <div className="container mt-5 text-center">
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Posts posts={posts} loading={loading}/>
    </div>
  );
}

export default App;
