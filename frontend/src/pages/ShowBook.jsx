import Spinner from "../components/spinner"
import BackButton from "../components/BackButton"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



const ShowBook = () => {
  const [book, setbook] = useState({});
  const [loading, setloading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setloading(true);
    axios.get(`https://book-store-g0bn.onrender.com/books/${id}`)
      .then((response) => {
        setbook(response.data);
        setloading(false);
      }).catch((error) => {
        console.log(error);
        setloading(false);
      }
           
         )
  },[id])
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className=" text-3xl my-4"> Show Book</h1>
      {loading ? (
      <Spinner/>
      ): (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
              <span className="text-xl my-4 text-gray-500 "> Id : </span>
              <span>{ book._id}</span>

            </div>
             <div className="my-4">
              <span className="text-xl my-4 text-gray-500 ">Title : </span>
              <span>{ book.title}</span>

            </div>
             <div className="my-4">
              <span className="text-xl my-4 text-gray-500 "> Author : </span>
              <span>{ book.author}</span>

            </div>
             <div className="my-4">
              <span className="text-xl my-4 text-gray-500 ">Publish Year : </span>
              <span>{ book.publishYear}</span>

            </div>
             <div className="my-4">
              <span className="text-xl my-4 text-gray-500 "> Create Time : </span>
              <span>{new Date(book.createdAt).toString()}</span>

            </div>
             <div className="my-4">
              <span className="text-xl my-4 text-gray-500 ">Last Update Time : </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
         </div>

          
      )}
    </div>
  )
}

export default ShowBook