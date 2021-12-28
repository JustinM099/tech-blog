// //logout
const logoutHandler = async (e) => {
    e.preventDefault()
    console.log('ATTEMPTING TO LOG OUT')
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('#logout').addEventListener('click', logoutHandler)
  
