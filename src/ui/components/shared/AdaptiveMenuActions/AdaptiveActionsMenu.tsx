import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

type Props = {
  actions: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }[];
};

const AdaptiveActionsMenu: React.FC<Props> = ({ actions }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      flexGrow={1}
      display={"flex"}
      justifyContent={"flex-end"}
      sx={{
        containerType: "inline-size",
        containerName: "card",
        ".nav": {
          display: "flex",
        },
        ".menu": {
          display: "none",
        },
        "@container card (width < 250px)": {
          ".nav": {
            display: "none",
          },
          ".menu": {
            display: "inline-block",
          },
        },
      }}
    >
      <Box className={"nav"} gap={1}>
        {actions.map((action, index) => (
          <IconButton key={index} onClick={action.onClick}>
            {action.icon}
          </IconButton>
        ))}
      </Box>
      <Box className={"menu"}>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="custom-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {actions.map((action, index) => (
            <MenuItem key={index} onClick={action.onClick}>
              <ListItemIcon>{action.icon}</ListItemIcon>
              <Typography variant="inherit">{action.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};
export default AdaptiveActionsMenu;
