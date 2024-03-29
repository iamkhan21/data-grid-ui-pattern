import React from "react";
import { VehiclesGrid } from "../../components/shared/VehiclesGrid";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const rows = [
  {
    id: 1,
    photoUrl: "https://via.placeholder.com/150",
    type: "Sedan",
    state: "New",
  },
  {
    id: 2,
    photoUrl: "https://via.placeholder.com/150",
    type: "SUV",
    state: "Used",
  },
  {
    id: 3,
    photoUrl: "https://via.placeholder.com/150",
    type: "Coupe",
    state: "New",
  },
];

const columns: GridColDef[] = [
  {
    field: "type",
    headerName: "Type",
    maxWidth: 250,
    flex: 1,
    cellClassName: "bg-rose-300",
  },
  {
    field: "state",
    headerName: "State",
    width: 150,
    cellClassName: "bg-rose-300",
  },
  {
    field: "action",
    headerName: "",
    flex: 1,
    cellClassName: "bg-rose-300",
    renderCell: (params: GridRenderCellParams) => (
      <Box className="w-full flex justify-end gap-2">
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
      <VehiclesGrid
        rows={rows}
        columns={columns}
        onNewVehicleFormSubmit={(data) => console.log(data)}
      />
    </article>
  );
};
