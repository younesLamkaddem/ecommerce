import React from 'react';
import './collectionItem.style.scss';
import CustomButton from '../customButton/customButton.component'
import {connect} from 'react-redux'
import {AddItem} from '../../redux/cart/cart.actions'

const CollectionItem = ({item , AddItem}) => 
    {
        const {name , price , imageUrl} = item ; 
        return (
        (
            <div className="collection-item">
                <div className="image" style={{ backgroundImage : `url(${imageUrl})`}}></div>
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span  className="price">{price}</span>
        
                </div>
                <CustomButton onClick ={()=> AddItem(item)} inverted >Add To Cart</CustomButton>
            </div>
        )
    )}

const mapDispatchToProps = dispatch => ({
    AddItem : item => dispatch(AddItem(item))
})

export default connect(null ,mapDispatchToProps) (CollectionItem)