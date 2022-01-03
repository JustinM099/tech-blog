const newPost = async (e) => {
    e.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ 
          title, 
          description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(`I'm sorry, we were unable to create your post. Please try again.`);
      }
    }
  };
  document.querySelector('#post-button').addEventListener('click', newPost)