async function updateBlog(event){
    event.preventDafault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#contentInput').value.trim();
    const pathname = window.location.pathname.split('/');
    const id = pathname[2];

    console.log(title);
    console.log(content);
  console.log(id);
        // const response = await fetch(`/api/blogs/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify({ id, title, content }),
        //     headers: { 'Content-Type': 'application/json' },
        // });

        // if (response.ok) {
        //   console.log("Post has been updated")
        //  // document.location.replace('/dashboard');
        // } else {
        //   console.log("Post has not been updated")

        //   alert('Failed to update project');
        // }
}

const delBlogPost = async (event) => {
      
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
  document.querySelector('#deleteBlogBtn').addEventListener('click', delBlogPost);
