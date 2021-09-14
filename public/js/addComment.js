async function addNewComment(event){
    event.preventDefault();
  
    const content = document.querySelector('#commentInput').value.trim();
  
    console.log(content);

   
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log(response);
            // document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
    
  };

 document.querySelector('#newComment').addEventListener('submit', addNewComment);
 