import React, {createContext, useState} from 'react'

const BlogContext = createContext()
const axios = require('axios').default

export const BlogProvider = ({ children }) => {
    const [blog, setBlog] = useState({})
    const [blogs, setBlogs] = useState([])
    const [editBlog, setEditBlog] = useState(false)
    const [blogID, setBlogID] = useState('')

    function addBlog(blogItem){ 
      axios.post('http://localhost:1000/blog', blogItem)
        .catch(err => console.log(err))
    }

    function editAndUpdate(obj, id){
      axios.put(`http://localhost:1000/blog/${id}`, obj)
    }

    function deleteBlog(id){
      axios.delete(`http://localhost:1000/blog/${id}`)
    }

    function getBlogs(){
      axios.get('http://localhost:1000/blog')
        .then(response => setBlogs(response.data))
        .catch(err => console.log(err))
    }

    function getBlog(id){
      axios.get(`http://localhost:1000/blog/${id}`)
        .then(response => setBlog(response.data))
        .catch(err => console.log(err))
    }
  return (
    <BlogContext.Provider value={{
      blog,
      blogs,
      editBlog,
      blogID,
      addBlog,
      setEditBlog,
      deleteBlog,
      getBlogs,
      getBlog,
      editAndUpdate,
      setBlogID
    }}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContext