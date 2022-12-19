import React from "react";
import { VehiclesTable } from "../../components/shared/VehiclesTable";
import { GridRenderCellParams, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const rows: GridRowsProp = [
  {
    id: 1,
    photo: "https://via.placeholder.com/150",
    type: "Sedan",
    state: "New",
  },
  {
    id: 2,
    photo: "https://via.placeholder.com/150",
    type: "SUV",
    state: "Used",
  },
  {
    id: 3,
    photo: "https://via.placeholder.com/150",
    type: "Coupe",
    state: "New",
  },
];

const columns = [
  { field: "type", headerName: "Type", maxWidth: 250, flex: 1 },
  { field: "state", headerName: "State", width: 150 },
  {
    field: "action",
    headerName: "",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        <Button variant="contained" size="small">
          Delete
        </Button>
      </Box>
    ),
  },
];

export const VehiclesDP = () => {
  return (
    <article>
      <VehiclesTable
        rows={rows}
        columns={columns}
        onNewVehicleFormSubmit={(data) => console.log(data)}
      />
    </article>
  );
};
