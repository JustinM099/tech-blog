
const editFunction = async (e) => {
    console.log('TIME TO EDIT')
    e.preventDefault()
    const postTitle = document.querySelector('input[name="title"]').value
    const postDescription = document.querySelector('input[name="post"]').value
    const route = window.location.pathname
    console.log(route)

    const res = await fetch(`/${route}`, {
        method: 'PUT',
        body: JSON.stringify({
            postTitle,
            postDescription
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    })

    if(res.ok){
        document.location.replace('/dashboard')

    }else{
        alert(`I'm sorry, we were unable to complete your request.`)
    }
}
document.querySelector('#edit').addEventListener('click', editFunction)