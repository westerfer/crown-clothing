import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {selectCollection} from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import './collection.scss'

import {firestore} from "../../firebase/firebaseUtils";

const CollectionPage = ({ collection }) => {
    useEffect(() => {
        console.log('Im subscribing')
        const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))

        return() => {
            console.log("a am unsubscibed")
            unsubscribeFromCollections()
        }
    }, [])
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
