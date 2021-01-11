import React from 'react'
import styles from './ProductCategoryRow.module.css'

class ProductCategoryRow extends React.Component {


    render() {
        return (
            <tr>
                <td colSpan='2' className={styles.categoryName}>
                    {this.props.category}
                </td>
            </tr>
        )

    }
}

export default ProductCategoryRow;