import React from 'react';
import { useState, useEffect } from 'react';

const Api = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('kostore/src/Components/Products.json');
                console.log ({response});
                if (!response.ok) {
                    throw new Error('Products Not Available');

                }
                console.log ({products});
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('problem loading the products:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> Products</h1>
            <div className="container-md" >
                <ul>
                    {products.map((p) => (
                        <li key={p.id}>

                            <div className="card" style="width: 18rem;">
                                <img src={p.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{p.name}</h5>
                                    <p class="card-text">{p.description}</p>
                                    <a href="#" class="btn btn-primary">Add</a>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Api