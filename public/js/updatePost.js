async function updateComment(event){
    event.preventDafault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#contentInput').value.trim();
  
    console.log(title);
    console.log(content);

    if (title && content) {
        const response = await fetch('/api/blogs/${id}', {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

}
}

const delBlogPost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };