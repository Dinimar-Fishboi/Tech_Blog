async function addNewComment(event){
    event.preventDefault();
  
    const content = document.querySelector('#commentInput').value.trim();

    //TODO create 
   // const blog_id = 

    console.log(content);
    //console.log(blog_id);
   
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log(response);
            // document.location.reload
        } else {
            console.log(response.statusText);

        }
    
  };

 document.querySelector('#newComment').addEventListener('submit', addNewComment);
 