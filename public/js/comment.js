//comment handler
const postComment = async (e) => {
    e.preventDefault()

    //get id number from window location object pathname
    const route = window.location.pathname
    const routeString = route.toString()
    const idString = routeString.slice(-1)
    const post_id = parseInt(idString)
    console.log(route)
    console.log(post_id)

    const description = document.querySelector('textarea[name="comment"]').value.trim()
    const title = document.querySelector('textarea[name="commentTitle"]').value.trim()
    if (description && title) {
        const res = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                post_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.ok) {
            document.location.reload()
        } else {
            alert(res.statusText)
        }
    }
}
document.querySelector('.comment-form').addEventListener('submit', postComment)