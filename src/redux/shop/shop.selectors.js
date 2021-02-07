import {createSelector} from 'reselect'

const selectShop = state => state.shop


export const selectShopData = createSelector(
    [selectShop] ,
    shop => shop.shopData
)




export const selectCollection = urlParamPassed =>
    createSelector(
         [selectShopData],
         collections => collections[urlParamPassed]
    )


export const selectCollectionsForPreview  = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map( key => collections[key])
)