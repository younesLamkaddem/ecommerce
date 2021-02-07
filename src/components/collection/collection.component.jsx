import React from 'react'
import './collection.style.scss'
import { connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'
import CollectionItem from '../collectionItem/collectionItem.component'
const Collection = ({collection}) => {
    
    const {title , items} = collection;
    return(

    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">

        {
            items.map(item => 
                <CollectionItem  key={item.id} item={item}/>
                )
        }
        </div>

    </div>
)
}

const mapStateToProps = (state , myownprops) => ({
    collection : selectCollection(myownprops.match.params.collectionId)(state)

})

export default connect(mapStateToProps)(Collection)