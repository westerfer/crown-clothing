import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {compose} from "redux";
import {SelectIsCollectionFetching} from "../../redux/shop/shopSelector";
import WithSpinner from "../spinner/spinner";
import CollectionsOverview from "./collectionsOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: SelectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview)


export default CollectionsOverviewContainer


