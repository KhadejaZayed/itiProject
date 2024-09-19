import React from 'react'
import { useState, useEffect } from 'react'
import Categoryproduct from './Categoryproduct'
import { fetchproduct } from '../rtk/slices/Products-slice';
import { useSelector,useDispatch } from 'react-redux';
import './category.css'
function Catigorize() {
    //fetch categorize
    const [category, setcategory] = useState([])
    const [cat, setcat] = useState("all")
    const getcategory = () => {
        fetch("https://vivacious-gentle-divan.glitch.me/catigories")
            .then(res => res.json())
            .then(data => setcategory(data))
    }
    useEffect(() => {
        getcategory()
    }, [])
    //fetch products
    const products = useSelector(state => state.product)
    const dispatch=useDispatch()
    console.log(products)
    useEffect(() => {
        dispatch(fetchproduct())
    },[products,dispatch]);
    return (
        <>
            <div className='row mt-5'>
                <div className='col-2'>
                    <button className='btn btn-info m-2 cat mt-5' onClick={() => setcat("all")}>All</button>
                    {
                        category.map((cat) => {
                            return (
                                <button className='btn btn-info m-2 cat' key={cat.id} onClick={() => setcat(cat.type)} >{cat.type}</button>
                            )
                        })
                    }
                </div>
                <div className='col-10 parent'>
                    {
                        products.map((pro) => {
                                    if(cat==="all"){
                                        return <Categoryproduct product={pro} key={pro.id} />
                                    }
                                    else if(pro.category===cat){
                                        return <Categoryproduct product={pro} key={pro.id}/>
                                    }
                                }
                            )
                    }
                </div>
            </div>
        </>

    )
}

export default Catigorize
