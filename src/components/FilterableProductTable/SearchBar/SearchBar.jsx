import React from 'react'
import styles from './SearchBar.module.css'

class SearchBar extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <input type="text" placeholder='Search..' value={this.props.filterText} onChange={this.props.changeFilterText} />
                <label htmlFor="checkbox">
                    <input type="checkbox" id='checkbox' onChange={this.props.toggleCheckbox} />
                    Only in stock
                </label>

            </div>
        )
    }
}

export default SearchBar