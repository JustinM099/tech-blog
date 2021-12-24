//query selectors
document.querySelector('.login').addEventListener('submit', loginFunction) //login event listener


//login
const loginFunction = async (e) => {
    e.preventDefault()

    const password = document.querySelector('#password').value.trim()
    const userName = document.querySelector('#username').value.trim()

    if (password && userName){
        const res = await fetch('../controllers/api/userRoutes', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'application/json'}
        })

        if(res.ok){
            document.location.replace('/')
        }else{
            alert("I'm sorry, we were unable to log you in. Please check your credentials and try again.")
        }
    }
}

//logout
const logoutFunction = async () => {
    const res = await fetch('../controllers/userRoutes')
}

//create user

//create post
const newPost = async (e) => {
    e.preventDefault()

    const title = document.querySelector('#title').value.trim()
    const description = document.querySelector('#post-description').value.trim()

    const response = await fetch('..controllers/api/postRoutes', {
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/homepage')
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
  