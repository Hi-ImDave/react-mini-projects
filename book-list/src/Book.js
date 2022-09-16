const Book = (props) => {
  const { img, title, author } = props
  const clickHandler = () => {
    alert(`Purchase ${title}?`)
  }
  const mouseEnterHandler = (event) => {
    event.currentTarget.classList.add('hover')
  }
  const mouseLeaveHandler = (event) => {
    event.currentTarget.classList.remove('hover')
  }
  return (
    <article className='book'>
      <img
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        src={img}
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button className='btn' type='button' onClick={clickHandler}>
        Purchase
      </button>
    </article>
  )
}

export default Book
