import React from "react";
import { VehiclesTable } from "../../components/shared/VehiclesTable";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const rows: GridRowsProp = [
  { id: 1, photo: "https://via.placeholder.com/150", name: "Hello", age: 25 },
  {
    id: 2,
    photo: "https://via.placeholder.com/150",
    name: "DataGridPro",
    age: 18,
  },
  { id: 3, photo: "https://via.placeholder.com/150", name: "MUI", age: 32 },
];

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    cellClassName: "bg-blue-300",
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
    cellClassName: "bg-blue-300",
  },
  {
    field: "action",
    headerName: "",
    flex: 1,
    cellClassName: "bg-blue-300",

    renderCell: (params: GridRenderCellParams) => (
      <Box className="w-full flex justify-end gap-2">
        <Button variant="contained" size="small">
          Edit
        </Button>
        <Button variant="contained" size="small">
          Delete
        </Button>
      </Box>
    ),
  },
];

export const VehiclesPC = () => {
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
