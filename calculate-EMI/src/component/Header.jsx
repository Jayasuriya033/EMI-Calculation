import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const navItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    {
      text: "Exchange Rates",
      path: "/exchange-rates",
      icon: <CurrencyExchangeIcon />,
    },
  ];
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            // sx={{
            //   "&:hover": {
            //     backgroundColor:
            //       mode === "light"
            //         ? "rgba(0, 0, 0, 0.04)"
            //         : "rgba(255, 255, 255, 0.08)",
            //   },
            // }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          {/* <ListItemIcon>
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </ListItemIcon> */}
          <ListItemText primary="Dark Mode" />
          {/* <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            color="primary"
            inputProps={{ "aria-label": "toggle dark mode" }}
          /> */}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
    //   sx={{
    //     transition: "all 0.3s ease-in-out",
    //     backgroundColor: mode === "light" ? "white" : "#1e1e1e",
    //   }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : null}

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
          }}
        >
          <CurrencyExchangeIcon sx={{ mr: 1 }} />
          Loan Calculator
        </Typography>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{ mx: 1 }}
              >
                {item.text}
              </Button>
            ))}
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              {/* {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />} */}
              <Switch
                // checked={mode === "dark"}
                onChange={toggleTheme}
                color="primary"
                // inputProps={{ "aria-label": "toggle dark mode" }}
                sx={{ ml: 1 }}
              />
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
