import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';


const App = () => {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowProducts />}/>
            <Route path='/create' element={<CreateProduct />}/>
            <Route path='/edit/:id' element={<EditProduct />}/>
          </Routes>
        </BrowserRouter>
       
      </div>
    )
}

export default App
