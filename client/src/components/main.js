import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'
import {NavLink} from 'react-router-dom';

class Main extends Component {

    componentDidMount() {
        this
            .props
            .getItems();
    }

    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    render() {
        const {isAuth, isLoading, items} = this.props;

        return (
            <div className="main-section">
                <h2>Dashboard ( {(this.props.isAuth)
                        ? (
                            <span>Logged In</span>
                        )
                        : (
                            <span>Logged Out</span>
                        )})</h2>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isAuth: state.auth.isAuthenticated, isLoading: state.items.isLoading})

export default connect(mapStateToProps, {getItems, deleteItem})(Main);