import {createSelector} from 'reselect'

const selectShop = state => state.shop


export const selectShopData = createSelector(
    [selectShop] ,
    shop => shop.shopData
)




export const selectCollection = urlParamPassed =>
    createSelector(
         [selectShopData],
         collections => collections ? collections[urlParamPassed] : null
    )


export const selectCollectionsForPreview  = createSelector(
    [selectShopData],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : []
)