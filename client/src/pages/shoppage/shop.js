import React, {useEffect, lazy, Suspense} from 'react'
import { Route } from "react-router-dom";
import {connect} from 'react-redux'
import {fetchCollectionsStart} from "../../redux/shop/shopActions";

import WithSpinner from "../../components/spinner/spinner";
const CollectionsOverviewContainer = lazy(() => import('../../components/collectionsOverview/collectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../collectionpage/collectionPageContainer'));

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Suspense fallback={<WithSpinner />}>
                <Route exact path={`${match.path}`}
                       component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`}
                       component={CollectionPageContainer}
                />
            </Suspense>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
