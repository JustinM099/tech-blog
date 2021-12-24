
//login
const loginFunction = async (e) => {
    e.preventDefault()
    console.log('LOGIN FUNCTION')
    const password = document.querySelector('#password').value.trim()
    const userName = document.querySelector('#username').value.trim()

    if (password && userName){
        const res = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'application/json'}
        })

        if(res.ok){
            document.location.replace('/')
        }else{
            console.log(res)
            alert("I'm sorry, we were unable to log you in. Please check your credentials and try again.")
        }
    }
}

document.querySelector('.login').addEventListener('submit', loginFunction) //login event listener

//logout
const logoutFunction = async () => {
    const res = await fetch('../controllers/userRoutes')
}

//create user

const signup = async (e) => {
    e.preventDefault();
  
    const userName = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    if (userName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ userName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert("I'm sorry, we were unable to sign you up. Please try again.");
      }
    }
  }

  document.querySelector('.signup').addEventListener('submit', signup)
//create post
const newPost = async (e) => {
    e.preventDefault()

    const title = document.querySelector('#title').value.trim()
    const description = document.querySelector('#post-description').value.trim()

    const res = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {'Content-Type': 'application/json'}
    })

    if (res.ok) {
        document.location.replace('/')
    } else {
        alert("I'm sorry, we couldn't create your post!")
    }
}

//edit post

//delete post

//create comment

//edit comment

//delete comment

// const loginFormHandler = async (event) => {
//     // Stop the browser from submitting the form so we can do so with JavaScript
//     event.preventDefault();
  
//     // Gather the data from the form elements on the page
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       // Send the e-mail and password to the server
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in');
//       }
//     }
//   };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);
  