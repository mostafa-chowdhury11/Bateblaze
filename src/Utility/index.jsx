export  const getBlogs=()=>{
    let blogs=[]
    const storedBlog=localStorage.getItem('blogs')
    if(storedBlog){
        blogs=JSON.parse(storedBlog)
        
    }
    return blogs
}

export const saveBlogs=blog=>{
    const blogs=getBlogs()
    const exit=blogs.find(b=>b.id===blog.id)
    if(exit){
        return alert('alreday adeded')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    alert('successful')
}

export const blogDelete=id=>{
    const blogs=getBlogs()
    const reamining=blogs.filter(b=>b.id!==id)
    localStorage.setItem('blogs',JSON.stringify(reamining))
    alert('deletede')
}

