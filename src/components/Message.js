function MyHeader ({text, author, date}) {
    return(
        <div className="msg">
            <span>{author}</span>
            <span>{text}</span>
            <span>{date ? date.toDateString() : ''}</span>
        </div>
    )
}

export default MyHeader
