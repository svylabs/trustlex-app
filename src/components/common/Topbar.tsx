import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import LinkIcon from '@mui/icons-material/Link';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import WalletIcon from '@mui/icons-material/Wallet';
import ApiIcon from '@mui/icons-material/Api';

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="#233044" >
           Trustlex: Self-custodial, 0% fee Bitcoin exchange
        </Typography>
        <div style={{marginLeft: 'auto'}}>
            <IconButton color="primary" size="large" edge="start"><CurrencyBitcoinIcon /><ApiIcon /></IconButton>
            <IconButton color="secondary" size="large" edge="start"><LinkIcon /></IconButton>
          </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;