import React, {useState} from 'react';

import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {addNewBook} from "../../redux/actions";


const AddBook = (props) => {
    const isLoggedIn = useSelector(state => state.loggedIn);
    const isAdmin = useSelector(state => state.app.isAdmin);
    const[message, setMessage] = useState('');
    const dispatch = useDispatch();
    const publisherState = useSelector(state => state.publishers);
    const publishers = Object.values(publisherState);
    const authorsState = useSelector(state => state.authors);
    const authors = Object.values(authorsState);
    const { register, handleSubmit, errors , reset} = useForm();
    const onSubmit = data => {
        const {title,author,price,publisher} = data;
        const [authorIdObj] = authors.filter(auth => auth.name === author );
        const [publisherIdObj] = publishers.filter(publ => publ.name === publisher);
        const authorId = authorIdObj.id;
        const publisherId =publisherIdObj.id;

       dispatch(addNewBook(title,authorId,price,publisherId));
       setMessage(`BOOK ${title} ADDED`);
       reset();
    };

    return(<>

        <h2>Adding book</h2>
            {message}
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='title' name="title" type='text' ref={register({required:true})} />
                {errors.title && <span>This field is required</span>}

                <input placeholder='price' name="price"  type='number'  ref={register({ required: true, min:0 })} />
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
            <h3>Adding publishers and authors</h3>
             <NavLink to='/add/author'><button>Add author</button></NavLink>
             <NavLink to='/add/publisher'><button>Add publisher</button></NavLink>
             <NavLink to='/admin'><h4>Back to Administration Area</h4></NavLink>
        </>

    )
}
export default AddBook;