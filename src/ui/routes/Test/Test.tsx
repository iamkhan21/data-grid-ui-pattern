import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AdaptiveActionsMenu from "../../components/shared/AdaptiveMenuActions/AdaptiveActionsMenu";

type CustomCardProps = {
  actions?: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({ actions }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Box
          display={"flex"}
          gap={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" component="h5">
            Card Title
          </Typography>
          {actions}
        </Box>

        <Typography variant="body2" color="text.secondary">
          Card description or content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
};

const actions = [
  {
    icon: <HomeIcon />,
    label: "Home",
    onClick: () => console.log("Home"),
  },
  {
    icon: <AccountCircleIcon />,
    label: "Account",
    onClick: () => console.log("Account"),
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    onClick: () => console.log("Settings"),
  },
];

const Test = () => {
  return (
    <Box display={"flex"} gap={2}>
      <CustomCard actions={<AdaptiveActionsMenu actions={actions} />} />
      <CustomCard actions={<AdaptiveActionsMenu actions={actions} />} />
      <CustomCard actions={<AdaptiveActionsMenu actions={actions} />} />
    </Box>
  );
};

export default Test;
