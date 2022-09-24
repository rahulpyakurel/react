import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Test from '../Test'

const Datafetching = () => {
    const [posts,setPost] = useState([])
    const [limit,setLimit] = useState(20)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=> console.log(err))
    },[])
  return (
    <>
        <Test/>
        <div className='container-fluid'>
            <div className='row d-flex'>
                {posts.slice(0,limit).map((post)=>(
                    <div className='col-md-4 shadow-lg'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            <div className='col-md-4'>
                    {limit<posts.length &&
                    <button className='btn btn-warning p-3' onClick={()=>setLimit(limit+20)}>
                        Load More
                    </button>
                    }
                </div>
        </div>
    </>
  )
}

export default Datafetching