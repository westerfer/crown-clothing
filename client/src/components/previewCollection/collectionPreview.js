import React from 'react'

import './collectionPreview.scss'

import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter( (item, idx) => idx < 4 )
                    .map( (item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview
