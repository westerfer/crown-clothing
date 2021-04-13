import {connect} from 'react-redux'
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {isCollectionLoaded} from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/spinner/spinner";
import CollectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage)

export default CollectionPageContainer
