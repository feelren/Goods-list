import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import styles from './FilterableProductTable.module.css'
import ProductTable from './ProductTable/ProductTable'

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isInStockOnly: false,
        }
    }

    toggleCheckbox = () => {
        (!this.state.isInStockOnly) ? this.setState({ isInStockOnly: true }) : this.setState({ isInStockOnly: false });
    }

    changeFilterText = (event) => {
        this.setState({
            filterText: event.target.value
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <SearchBar filterText={this.state.filterText} isInStockOnly={this.state.isInStockOnly} toggleCheckbox={this.toggleCheckbox} changeFilterText={this.changeFilterText} />
                <ProductTable products={this.props.products} filterText={this.state.filterText} isInStockOnly={this.state.isInStockOnly} />
            </div>

        )
    }
}

export default FilterableProductTable