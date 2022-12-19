import React from "react";
import { VehiclesTable } from "../../components/shared/VehiclesTable";
import { GridRenderCellParams, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { DialogProps } from "../../components/shared/DataView";

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
  {
    id: 4,
    photo: "https://via.placeholder.com/150",
    type: "Convertible",
    state: "Used",
  },
  {
    id: 5,
    photo: "https://via.placeholder.com/150",
    type: "Hatchback",
    state: "New",
  },
  {
    id: 6,
    photo: "https://via.placeholder.com/150",
    type: "Sedan",
    state: "Used",
  },
  {
    id: 7,
    photo: "https://via.placeholder.com/150",
    type: "SUV",
    state: "New",
  },
  {
    id: 8,
    photo: "https://via.placeholder.com/150",
    type: "Coupe",
    state: "Used",
  },
  {
    id: 9,
    photo: "https://via.placeholder.com/150",
    type: "Convertible",
    state: "New",
  },
  {
    id: 10,
    photo: "https://via.placeholder.com/150",
    type: "Hatchback",
    state: "Used",
  },
];

const columns = (
  openDialogWithContent: (
    contentFn: (props: DialogProps) => React.ReactNode
  ) => void
) => [
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
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            openDialogWithContent(({ closeDialog }) => (
              <>
                <DialogTitle id="alert-dialog-title">
                  Delete vehicle
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure that you want to remove this vehicle?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog}>Cancel</Button>
                  <Button onClick={closeDialog} autoFocus>
                    Yes, remove
                  </Button>
                </DialogActions>
              </>
            ))
          }
        >
          Delete
        </Button>
      </Box>
    ),
  },
];
export const VehiclesDP = () => {
  return (
    <article>
      <VehiclesTable rows={rows} columns={columns} />
    </article>
  );
};
