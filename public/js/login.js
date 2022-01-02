//login
const loginFunction = async (e) => {
  e.preventDefault()
  console.log('LOGIN FUNCTION')
  const password = document.querySelector('#password').value.trim()
  const name = document.querySelector('#username').value.trim()
  console.log(password)
  console.log(name)

  if (password && name) {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
      document.location.replace('/')
    } else {
      console.log(res)
      alert("I'm sorry, we were unable to log you in. Please check your credentials and try again.")
    }
  }
}

document.querySelector('.login').addEventListener('submit', loginFunction) //login event listener


//create user

const signup = async (e) => {
  e.preventDefault()
  const name = document.querySelector('#signup-username').value.trim()
  const email = document.querySelector('#signup-email').value.trim()
  const password = document.querySelector('#signup-password').value.trim()
  console.log(name, email, password)
  if (name && email && password) {
    console.log('TRYING TO FETCH')
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (res.ok) {
      document.location.replace('/homepage')
    } else {
      console.log(res)
      alert("I'm sorry, we were unable to sign you up. Please try again.")
    }
  }
}

document.querySelector('.signup').addEventListener('submit', signup)
