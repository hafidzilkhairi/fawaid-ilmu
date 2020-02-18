import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Container
} from '@material-ui/core';
import LogoWhite from '../../asset/logo/logo-fawaid-ilmu-white.png';
import SearchIcon from '../../asset/icons/search.svg';

const component = props => {
    const { classes } = props;
    const menu = ["Artikel Islam", "Info Kajian", "Tentang Kami"];
    return (
        <Box className={classes.rootWrapper}
        style={{
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            background: "#049DD9",
            padding: "20px 8%",
            display: "flex",
            justifyContent: "space-between",
            boxSizing: "border-box",
            alignItems: "center",
            zIndex: 100,
            maxHeight: 91,
        }}
        >
            <img src={LogoWhite} style={{ width: 130.6, height: 40 }} />
            <ul style={{ listStyle: "none", display: "flex", color: "#fff" }}>
                {menu.map(val => (
                    <li style={{ padding: "0px 16px" }}>{val}</li>
                ))}
            </ul>
            <Box style={{ width: 320, height: 40, background: "#fff", borderRadius: 10, display: "flex", alignItems: "center" }}>
                <img src={SearchIcon} style={{ width: 24, height: 24, marginLeft: 16}}/>
                <input style={{ flex: 1, border: "none", margin: "0px 12px", outline: "none" }} placeholder="Cari" />
            </Box>
        </Box>
    )
}

component.propTypes = {

}

export default component
