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
  { id: 1, photo: "d1", name: "Hello", age: 25 },
  { id: 2, photo: "d2", name: "DataGridPro", age: 18 },
  { id: 3, photo: "d3", name: "MUI", age: 32 },
];

const columns = (
  openWithContent: (contentFn: (props: DialogProps) => React.ReactNode) => void
) => [
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 150 },
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
            openWithContent(({ closeDialog }) => (
              <>
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog}>Disagree</Button>
                  <Button onClick={closeDialog} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </>
            ))
          }
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            openWithContent(({ closeDialog }) => (
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
export const VehiclesPC = () => {
  return (
    <article>
      <VehiclesTable rows={rows} columns={columns} />
    </article>
  );
};
