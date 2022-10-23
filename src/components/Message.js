function MyHeader ({text, author, date}) {
    let strDate = ''
    if (date) {
        try {
            strDate = date.toDateString()
        } catch {
            strDate = new Date()
            strDate = strDate.toDateString()
        }
    }
    return(
        <div className="msg">
            <span>{author}</span>
            <span>{text}</span>
            <span>{strDate}</span>
        </div>
    )
}

export default MyHeader
