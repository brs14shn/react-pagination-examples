import './App.css';
import axios from "axios"
import {useState,useEffect} from "react"

function App() {
  const [posts,setPosts] =useState([])
  const [loading,setLoading ] =useState(false)
  const [currentPage,setCurrentPage] =useState(1)
  const [postsPerPage,setPostsPerPage] =useState(10)
  
  const baseUrl=

  useEffect=(()=>{
    const FetchPosts=async()=>{
      const res =await axios.get(baseUrl)
    }

  },[])
  return (
    <div className="App">
      <h1>Pagination</h1>
      


    </div>
  );
}

export default App;
