const updateBlog = async (event) => {

    // event.preventDafault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#contentInput').value.trim();

    console.log(title);
    console.log(content);

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
debugger
        if (response.ok) {
          console.log("Post has been updated")
         // document.location.replace('/dashboard');
        } else {
          console.log("Post has not been updated")

          alert('Failed to update project');
        }
}

const delBlogPost = async (event) => {
      
    // event.preventDafault();
      const pathname = window.location.pathname.split('/');
      const id = pathname[3];
            console.log(id)
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    
  };

  document.querySelector('#updatePost').addEventListener('submit', updateBlog);
  // document.querySelector('#updatePost').onsubmbit = updateBlog);

  
  document.querySelector('#deleteBlogBtn').addEventListener('click', delBlogPost);
