import React from 'react'
import NavigationBar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import BlogPage from './pages/BlogPage'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BlogProvider } from './app/context'
import WriteBlog from './pages/WriteBlog'

// cC
const App = () => {
  return (
    <>
      <BlogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="blogs" element={<Blogs/>} />
                <Route path="blogs/:id" element={<BlogPage />} />
                <Route path="write" element={<WriteBlog />} />
                <Route path="*" element={<h1>Error Lmao</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </>
  )
}

export default App