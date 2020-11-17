import React from "react";
import '../styles/Product.css'
import ProductListItem from "./ProductListItem";
import ProductDetails from "./ProductDetails";

// Eventually this should be data loaded from a service, for now just fake it
import mockData from "../mockdata/products.json";
/** Note to developers
 * The import above works within create-react-app because
 * Webpack bundles the file into the application.
 * You'll learn how to fetch content through APIs in a future lesson.
 */

function ProductView() {
    // TODO: Replace with state variable
    const sideOpen = true;

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {mockData.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => console.log('SET SELECTED PRODUCT', item)}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => console.log('TOGGLE SIDE PANEL')}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
