import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../component/Appbar';
import Content from '../../component/home-content';
import Headline from '../../component/headline';
import { Box } from '@material-ui/core';

const component = props => {
    const { classes } = props;
    return (<Box style={{ minHeight: "100vh", backgroundColor: "#E5E5E5", boxSizing: "border-box", padding: "104px 8% 0", display: "flex", flexDirection: "column" }}>
        <AppBar />
        {/* <Headline /> */}
        <Content />
    </Box>
    )
}

component.propTypes = {

}

export default component
