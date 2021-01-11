import React from 'react'
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';
import styles from './ProductTable.module.css'


class ProductTable extends React.Component {

    render() {
        let rows = [];
        let lastCategory;

        this.props.products.forEach(product => {

            let createRows = () => {
                let isFitFilter = () => {
                    if (product.name.toLowerCase().includes(this.props.filterText.toLowerCase())) return true;
                }

                if (product.category !== lastCategory) {
                    rows.push(
                        <ProductCategoryRow category={product.category} key={product.category} />
                    )
                }

                if (this.props.isInStockOnly) {
                    if (product.stocked && isFitFilter()) {
                        rows.push(
                            <ProductRow name={product.name} price={product.price} stocked={product.stocked} key={product.name} />
                        )
                    }
                } else if (isFitFilter()) {
                    rows.push(
                        <ProductRow name={product.name} price={product.price} stocked={product.stocked} key={product.name} />
                    )
                }
                lastCategory = product.category;
            }
            createRows();
        })

        return (
            <div className={styles.wrapper}>
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
            </div>
        );
    }
}

export default ProductTable;