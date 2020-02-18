import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core';
import posterArtikel from '../../asset/poster/artikel/artikel.jpg';

const component = props => {
    const { classes } = props;
    const menu = ["Artikel Islam", "Info Kajian", "Tentang Kami"];
    return (
        <Grid container
        style={{
            width: "100%",
            justifyItems: "stretch",
            boxSizing: "border-box"
        }}
        >
            <Grid
            style={{
                width: "50%",
            }}
            >
                <Box
                style={{
                    width: "100%",
                    paddingTop: "80%",
                    background: "yellow"
                }}
                >
                </Box>
            </Grid>
            <Grid
            style={{
                width: "50%",
            }}
            >
                <Box>

                </Box>
            </Grid>
        </Grid>
    )
}

component.propTypes = {

}

export default component
