import React from 'react'
import styles from './ProductRow.module.css'


class ProductRow extends React.Component {
    render() {
        return (
            <tr className={(!this.props.stocked) ? styles.red : undefined}>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}

export default ProductRow;