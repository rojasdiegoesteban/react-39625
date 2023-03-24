import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/system/Box';


const NavListDrawer = (props) => {

    const [openMarca, setOpenMarca] = React.useState(false);
    const [openZapa, setOpenZapa] = React.useState(false);

    const handleClickMarca = () => {
        setOpenMarca(!openMarca);
    };

    const handleClickZapa = () => {
        setOpenZapa(!openZapa);
    };


    return (
        <Box sx={{width: 200 }}> 
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    CrAzySTorE
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClickMarca}>
                <ListItemText primary="MARCAS" />
                {openMarca ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMarca} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {
                    props.marcas.map(marca => (
                        <ListItemButton key={marca} sx={{ pl: 4 }}>
                        <ListItemText primary={marca} />
                        </ListItemButton>
                    ))
                }
                </List>
            </Collapse>

            <ListItemButton onClick={handleClickZapa}>
                <ListItemText primary="ZAPATILLAS" />
                {openZapa ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openZapa} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {
                    props.zapas.map(zapa => (
                        <ListItemButton key={zapa} sx={{ pl: 4 }}>
                        <ListItemText primary={zapa} />
                        </ListItemButton>
                    ))
                }
                </List>
            </Collapse>
            
        </List>
        </Box>
    );
}

export default NavListDrawer