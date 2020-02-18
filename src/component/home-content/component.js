import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Typography,
    Grid
} from '@material-ui/core';
import posterArtikel from '../../asset/poster/artikel/artikel.jpg';

const Component = props => {
    const [contentMenu, setContentMenu] = useState({
        active: "Artikel Islam",
        menus: ["Artikel Islam", "Info Kajian"]
    });
    const { classes } = props;
    const menu = ["Artikel Islam", "Info Kajian", "Tentang Kami"];
    function changeContentMenu(e) {
        setContentMenu({...contentMenu, active: e.currentTarget.value})
    }
    return (
        <Box style={{ display: "flex", width: "100%", background: "#fff", flex: 1, borderRadius: "10px 10px 0px 0px", padding: "52px 4% 32px", boxSizing: "border-box", marginTop: 24 }}>
            <Box style={{ width: "65%", boxSizing: "border-box" }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                    {
                        contentMenu.menus.map((val) => {
                            let styles = { fontSize: 16, margin: 8}
                            if (contentMenu.active == val) {
                                styles = { ...styles, ...{ background: "#049DD9", boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.1)", fontWeight: "Bold", color: "#fff"}}
                            } else {
                                styles = { ...styles, ...{color: "#000"}}
                            }
                            return (
                            <Button value={val} onClick={changeContentMenu} style={styles}>{val}</Button>
                        )})
                    }
                </Box>
{[1,2,3].map(() => (
                <Grid container
                    style={{
                        marginTop: 32,
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "4.5%",
                        background: "#fff",
                        boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.1)",
                        borderRadius: 10,
                        justifyItems: "stretch"
                    }}
                >
                    <Grid style={{ width: "30%" }}>
                        <Box
                            style={{
                                width: "100%",
                                paddingTop: "100%",
                                background: "url(" + posterArtikel + ")",
                                backgroundSize: "100%",
                                borderRadius: 10
                            }}
                        />
                    </Grid>
                    <Grid style={{ width: "70%" }}>
                        <Box style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box", paddingLeft: "4.5%" }}>
                            <Typography style={{ fontSize: 24, fontWeight: "Bold" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </Typography>
                            <Typography style={{ fontSize: 16, overflow: "hidden", textOverflow: "ellipsis", maxHeight: 70, color: "#7e7e7e" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <Box style={{ display: "flex", }}>
                                <Typography style={{ fontSize: 11, color: "#7e7e7e" }}>1 Jan 2020</Typography><Typography style={{ fontSize: 11, color: "#7e7e7e", marginLeft: 12 }}>3 Menit</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
))}            
            </Box>
            <Box style={{ width: "35%", boxSizing: "border-box", marginLeft: 32 }}>
                <Box style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Typography style={{ fontSize: 36, color: "#323232", fontWeight: "bold" }}>Info Donasi</Typography>
                </Box>
{ [1,2,3].map(() => (
                <Box
                style={{
                    width: "100%",
                    paddingTop: "100%",
                    background: "#e2e2e2",
                    marginTop: 32,
                    borderRadius: 10
                }}
                />
))}
                </Box>
        </Box>
    )
}

Component.propTypes = {

}

export default Component
