import React from "react";
import { DataView } from "../DataView";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";

const defaultColumns: GridColDef[] = [
  {
    field: "photo",
    headerName: "Photo",
    width: 80,
    cellClassName: "bg-yellow-300",
    renderCell: (params: GridRenderCellParams) => {
      return (
        <img
          className="p-1"
          height={50}
          width={50}
          src={params.formattedValue}
          alt=""
        />
      );
    },
  },
];

type Props = Parameters<typeof DataGrid>[0] & {
  onNewVehicleFormSubmit: (formData: Record<string, any>) => void;
};

export const VehiclesTable: React.FC<Props> = ({
  onNewVehicleFormSubmit,
  ...props
}) => {
  const [vehicleDialogOpened, setVehicleDialogOpened] = React.useState(false);

  function closeDialog() {
    setVehicleDialogOpened(false);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNewVehicleFormSubmit({ data: "test" });
    closeDialog();
  }

  return (
    <>
      <DataView
        {...props}
        title="VEHICLES"
        subtitle="Add and manage your vehicles."
        btn={"Add vehicle"}
        columns={[...defaultColumns, ...props.columns]}
        onBtnClick={() => setVehicleDialogOpened(true)}
      />

      <Dialog
        open={vehicleDialogOpened}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">New vehicle</DialogTitle>
        <DialogContent className="bg-yellow-300">
          <Box
            component="form"
            className="py-2 flex flex-col gap-4"
            id="vehicle-form"
            onSubmit={onSubmit}
          >
            <TextField fullWidth label="Name" variant="outlined" required />
            <TextField
              fullWidth
              label="License plate"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Internal ID"
              variant="outlined"
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={closeDialog}>
            Cancel
          </Button>
          <Button form="vehicle-form" type="submit" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
