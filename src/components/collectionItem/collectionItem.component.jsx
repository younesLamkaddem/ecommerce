import React from 'react';
import './collectionItem.style.scss';
import CustomButton from '../customButton/customButton.component'
const CollectionItem = ({imageUrl , name , price}) => (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage : `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>
        <CustomButton inverted>Add To Cart</CustomButton>
    </div>
)

export default CollectionItem