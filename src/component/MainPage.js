import { Badge, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';

import axios from 'axios';
import React, { useEffect, useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MainPage() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    console.log(tableData.length, "ttd")



    const i = 0;
    const handleChange = (e, i) => {
        setTableData([...tableData, e])

    }

    useEffect(() => {
        axios.get("https://fakestoreapi.com/carts").then((response) => {
            setData(response.data)
            console.log(response.data, "dtt")
        }).catch(() => {
            console.log("something getting error")

        });

    }, []);


    return (

        <>
            {/* header */}

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0, ml: { md: "90%", xs: "50%" } }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <MenuItem>
                                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                            <Badge badgeContent={tableData && tableData.length} color="error">
                                                <ShoppingCartIcon />
                                            </Badge>
                                        </IconButton>

                                    </MenuItem>

                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', width: "300px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{}}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>userId</TableCell>
                                                    <TableCell align='center'>userList</TableCell>


                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    tableData.map((cv) => (

                                                        <TableRow>
                                                            <TableCell>{cv.userId}</TableCell>
                                                            <TableCell>
                                                                <Table stickyHeader aria-label="sticky table">
                                                                    <TableHead>
                                                                        <TableCell>ProductId</TableCell>
                                                                        <TableCell>quantity</TableCell>
                                                                        <TableCell></TableCell>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        {

                                                                            cv.products.map((cd) => (
                                                                                <TableRow>
                                                                                    <TableCell>{cd.productId}</TableCell>
                                                                                    <TableCell align='center'>{cd.quantity}</TableCell>
                                                                                </TableRow>
                                                                            ))
                                                                        }




                                                                    </TableBody>
                                                                </Table>
                                                            </TableCell>
                                                        </TableRow>

                                                    ))
                                                }
                                            </TableBody>
                                        </Table>

                                    </TableContainer>
                                    <Box component={"div"} sx={{ display: "flex", justifyContent: "end", padding: 0.5 }}>
                                        <Button variant='contained'>BuyNow</Button>
                                    </Box>

                                </Paper>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


            {/* item list  */}
            <Box sx={{ width: { md: "700px", xs: "100%" }, margin: "auto", mt: 5 }}>

                <TableContainer component={Paper}>
                    <Table sx={{}} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: "20px", fontWeight: "bold" }} >user Id</TableCell>
                                <TableCell sx={{ fontSize: "20px", fontWeight: "bold" }}>User-Data</TableCell>
                                <TableCell align="right" sx={{ fontSize: "20px", fontWeight: "bold" }} >ADD-Cart</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data && data.map((row, index) => (

                                    <>

                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <h3>{row.userId}</h3>
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {/* products */}
                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 200 }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>ProductId</TableCell>
                                                                <TableCell >quantity</TableCell>

                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {
                                                                row.products.map((e) => (
                                                                    <TableRow
                                                                        key={e.userId}
                                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                    >

                                                                        <TableCell component="th" scope="row">
                                                                            {e.productId}
                                                                        </TableCell>
                                                                        <TableCell >{e.quantity}</TableCell>
                                                                    </TableRow>






                                                                ))
                                                            }

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </TableCell>
                                            <TableCell align='right' component="th" scope="row">
                                                <Button variant={"outlined"} onClick={() => handleChange(row, index)}>ADD_TO_Cart</Button>
                                            </TableCell>



                                        </TableRow>

                                    </>
                                ))

                            }




                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>








        </>
    )
}

export default MainPage