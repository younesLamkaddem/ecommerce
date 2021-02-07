import React from 'react'
import './collection-overview.style.scss'
import {connect} from 'react-redux'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component'

const CollectionOverview = ({collections}) => (

    <div className="collection-overview">
        {
            collections.map(({id , ...otherprops}) =>
                <CollectionPreview key={id}  {...otherprops}/>
                )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
