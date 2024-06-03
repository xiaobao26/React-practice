import React from 'react';

function ProductCategoryRow({ category }) {
    return (
        <>
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        </>
    )
}

function ProductRow({ product }) {
    let name;
    if (product.stocked) {
        name = product.name;
    } else {
        name = <span style={{ color: 'red'}}>
                    {product.name}
                </span>;
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        </>
    )
}

function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category}/>
            )
        }
        rows.push(
            <ProductRow product={product} key={product.name}/>
        )
        lastCategory = product.category;
    })


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )
}


function Searchbar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <br/>
            <label>
                <input type="checkbox" />
                {' '}Only show products in stock
            </label>
        </form>
    )
}

export default function FilterableProductTable({ products }) {
    return (
        <div>
            <Searchbar />
            <br/>
            <br/>
            <ProductTable products={products}/>
        </div>
    )
}

