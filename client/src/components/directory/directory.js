import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {selectDirectorySections} from "../../redux/directory/directorySelectors";
import MenuItem from "../menu-item/menu-item";

import './directory.scss'
import {selectCurrentUser} from "../../redux/user/userSelector";

const Directory = ({sections, currentUser}) => (
    <>
        <div className="directory-menu">
            {sections.map(({id, ...otherSectionProps}) =>
                <MenuItem key={id} {...otherSectionProps}/>)}
        </div>
    </>

)

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections,
    currentUser: selectCurrentUser,

})
export default connect(mapStateToProps)(Directory)
