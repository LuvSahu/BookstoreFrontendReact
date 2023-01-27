import React, { useEffect, useState } from "react";
import { GetAllBooks } from "../../services/bookservice";
import BookDetails from "../bookdeatails/bookdetails";
import Books from "../books/books";
import Header from "../header/header";
import './dashboard.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Dashboard = () => {

  const [allbooks, setAllbooks] = useState([])

  const [toggle, seTtoggle] = useState(false)

  const [bookdetails, setBookdetails] = useState({})




  const [currentPage, setCurrentPage] = useState([1])
  const [postsPerPage, setPostsPerPage] = useState(12)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allbooks.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(allbooks.length / postsPerPage);

  const bookdetail = () => {
    seTtoggle(true)
  }

  const allbook = (data) => {
    console.log(data, "bookdetail")
    setBookdetails(data)
    seTtoggle(true)
    // console.log(bookdetails.bookname)
  }

  useEffect(() => {
    GetAllBooks()
      .then((response) => {
        console.log(response)
        setAllbooks(response.data.data)
      })
      .catch((error) => { console.log(error) })

  }, [])

  console.log(allbooks);





  return (
    <div>
      <Header />


      {
        toggle ? <BookDetails bookdetail={bookdetail} bookdetails={bookdetails} /> :

          <div style={{ width: '78vw', height: 'auto', flexWrap: 'wrap', display: 'flex', gap: '1%', left: '10%', position: 'absolute', top: '17%', rowGap: '30px' }}>
            {
              currentPosts.map((book) => (
                <div onClick={() => allbook(book)}>
                  <Books book={book} bookdetail={bookdetail} />
                </div>
              ))

            }

          </div>

      }


      <footer className="pagination">
        <Stack spacing={2}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />

          {/* <Pagination count={postsPerPage} allbooks={currentPosts} /> */}
          {/* <Pagination count={postsPerPage} page={currentPage} onChange={handlePageChange} /> */}

        </Stack>
      </footer>

    </div>




  )
}

export default Dashboard