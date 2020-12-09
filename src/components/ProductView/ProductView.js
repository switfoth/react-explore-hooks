import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useState, useEffect } from 'react'

function ProductView({ products }) {

    const [sideOpen, setSideOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setSideOpen(true)
    }, [selectedProduct])

    useEffect(() => {
        setSelectedProduct()
    }, [sideOpen])

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            isSelected={ selectedProduct && selectedProduct.id === item.id }
                            key={item.id}
                            product={item}
                            onClick={() => setSelectedProduct(item) }
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} product={selectedProduct}/>
            </div>
        </div>
    );
}

export default ProductView;
