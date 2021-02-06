import React  from 'react';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component'
import {connect} from 'react-redux'
import {selectShopData} from '../../redux/shop/shop.selectors'
import ShopReducer from '../../redux/shop/shop.reducer'
import {createStructuredSelector} from 'reselect'
const Shop =({collections}) =>{


        return (
            <div className='shop-page'>
                {
                    collections.map(({id , ...otherCollectionProps}) =>
                         <CollectionPreview  key={id} {...otherCollectionProps} /> )
                }
            </div>
        )
}

const mapStateToProps =createStructuredSelector({
    collections : selectShopData
})

export default connect(mapStateToProps)(Shop)