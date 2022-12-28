import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product/';

const EditProduct = () => {
    const {id} = useParams();
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ stock, setStock ] = useState(0);

    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();

        await axios.put( `${endpoint}${id}`, {
            description: description,
            price: price,
            stock: stock
        })
        navigate('/');
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description);
            setPrice(response.data.price);
            setStock(response.data.stock);
        }
        getProductById();
    }, [])


    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input 
                        type='text'
                        value={description}
                        className='form-control'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>price</label>
                    <input 
                        type='number'
                        value={price}
                        className='form-control'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>stock</label>
                    <input 
                        type='number'
                        value={stock}
                        className='form-control'
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>

            </form>

        </div>
    )
}

export default EditProduct