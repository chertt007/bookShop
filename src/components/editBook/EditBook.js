import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editBook} from "../../redux/actions";


const EditBook =(props)=> {
    const { register, handleSubmit, errors , reset} = useForm();
    const {id}= useParams();
    const dispatch = useDispatch();
    const [message,setMessage] = useState('')


    const booksState = useSelector(state => state.books);
    const book = booksState[id];
    const publisherState = useSelector(state => state.publishers);
    const publishers = Object.values(publisherState);
    const authorsState = useSelector(state => state.authors);
    const authors = Object.values(authorsState);

    const onSubmit = data => {
        console.log(data)
        const {title,price,publisher,author} = data;
        const[filteredPublisher] = publishers.filter(publ => publ.name === publisher );
        const publisherId = filteredPublisher.id;
        const [filteredAuthor] = authors.filter(auth => auth.name === author);
        const authorId = filteredAuthor.id;
        const bookId = book.id;
        dispatch(editBook(title,authorId,price,publisherId,bookId));
        setMessage(`Changes saved. Book with id:  ${bookId}`);

        reset();
    };
    return(<>
        <h2>EDIT BOOK:</h2>
        {message}
        <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder='title' defaultValue={book.name}  name="title" type='text' ref={register({required:true})} />
            {errors.title && <span>This field is required</span>}

            <input placeholder='price' defaultValue={book.price} name="price"  type='number'  ref={register({ required: true, min:0 })} />
            {errors.price && <span>This field is required</span>}
            <select placeholder='publisher' name="publisher"    ref={register({ required: true, })} >
                {publishers.map(publisher => <option key={publisher.id}>{publisher.name}</option>)}
            </select>
            {errors.publisher && <span>This field is required</span>}

            <select placeholder='author' name="author"   ref={register({ required: true })} >
                {authors.map(author => <option key={author.id}>{author.name}</option>)}
            </select>
            {errors.author && <span>This field is required</span>}
            <input type="submit" />
        </form>

        </>)
}
export default EditBook;