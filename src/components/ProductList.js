import { ProductCard } from './Card.js';
import '../App.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {

const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://backend-tokpedplay-defxzpf2xq-et.a.run.app/product/${id}`);
                const data = await response.json();

                setProducts(data);
                console.log(">>> ID:", id)
                console.log('>>>:', response)
            } catch (error) {
                console.error("Error fetching :", error);
            }
        };
        fetchProduct();
    }, [id]); // Add _id as a dependency


    return (
        <div className="left-sidebar">
            {
                products.map((products) => {
                    return(
                        <ProductCard
                            linkProduct={products.linkProduct}
                            price={products.price}
                        />                        
                    )
                })
            }
        </div>
    );
}

export default ProductList;