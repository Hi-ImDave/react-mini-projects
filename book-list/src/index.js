import { createRoot } from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

const container = document.getElementById('root')
const root = createRoot(container)

function BookList() {
  return (
    <>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </>
  )
}

root.render(<BookList />)
