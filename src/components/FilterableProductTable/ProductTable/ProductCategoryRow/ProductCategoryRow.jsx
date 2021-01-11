import React from 'react'
// import styles from './ProductCategoryRow.module.css'

class ProductCategoryRow extends React.Component {


    render() {
        return (
            <tr>
                <th colSpan='2'>
                    {this.props.category}
                </th>
            </tr>
        )

    }
}

export default ProductCategoryRow;