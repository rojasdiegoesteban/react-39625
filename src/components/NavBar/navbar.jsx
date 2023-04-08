import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import BoltIcon from '@mui/icons-material/Bolt';
import Drawer from '@mui/material/Drawer';
import NavListDrawer from './navlistdrawer';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

const marcas = ['Adidas', 'Nike', 'Jordan', 'Vans'];
const zapas = ['Hombre', 'Mujer'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElMarca, setAnchorElMarca] = React.useState(null);
  const [anchorElZapa, setAnchorElZapa] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenMarcaMenu = (event) => {
    setAnchorElMarca(event.currentTarget);
  };
  const handleOpenZapaMenu = (event) => {
    setAnchorElZapa(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseMarcaMenu = () => {
    setAnchorElMarca(null);
  };
  const handleCloseZapaMenu = () => {
    setAnchorElZapa(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <BoltIcon sx={{ display: { xs: 'none', md: 'flex', l: 'flex' }, mr: 1, fontSize: '2.3rem' }} />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 12,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.0.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CrAzySTorE
          </Typography>
          {/* Menu Hamburguesa */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu hamburguesa"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              open={Boolean(anchorElNav)}
              anchor="left"
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <NavListDrawer marcas={marcas} zapas={zapas} />
            </Drawer>
          </Box>
          <BoltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '2.6rem' }} />
          <Typography
            variant="h4"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.0.8rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CrAzySTorE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleOpenMarcaMenu} sx={{ my: 2, color: 'white', display: 'block', fontSize: '1rem', mr: 2 }}> marcas </Button>
            <Button onClick={handleOpenZapaMenu} sx={{ my: 2, color: 'white', display: 'block', fontSize: '1rem', mr: 2 }}> zapatillas </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block', fontSize: '1rem', mr: 2 }}> accesorios </Button>

            {/* Menu de Marcas */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElMarca}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElMarca)}
              onClose={handleCloseMarcaMenu}
            >
              {marcas.map((marca) => (
                <MenuItem key={marca} onClick={handleCloseMarcaMenu}>
                  <Typography component={NavLink} to={`marcas/${marca}`} textAlign="center" sx={{ textDecoration: 'none' }}>{marca}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {/* Menu de Zapatillas */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElZapa}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElZapa)}
              onClose={handleCloseZapaMenu}
            >
              {zapas.map((zapa) => (
                <MenuItem key={zapa} onClick={handleCloseZapaMenu}>
                  <Typography component={NavLink} to={`zapatillas/${zapa}`} textAlign="center" sx={{ textDecoration: 'none' }}>{zapa}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', }}>
            <CartWidget />
            <Typography
              variant="h6"
              sx={{
                mr: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              0
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  )
}

export default NavBar;