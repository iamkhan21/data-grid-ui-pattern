import React, { FormEvent } from "react";
import { BaseProps, DataView, DialogProps } from "../DataView";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { GridRenderCellParams } from "@mui/x-data-grid";

const defaultColumns = (
  openDialogWithContent: (
    contentFn: (props: DialogProps) => React.ReactNode
  ) => void
) => [
  {
    field: "photo",
    headerName: "Photo",
    width: 80,
    renderCell: (params: GridRenderCellParams) => {
      return <img height={50} width={50} src={params.formattedValue} alt="" />;
    },
  },
];

export const VehiclesTable: React.FC<BaseProps> = ({ columns, rows }) => {
  return (
    <DataView
      title={<h1>Test</h1>}
      columns={(openDialogWithContent) => [
        ...defaultColumns(openDialogWithContent),
        ...columns(openDialogWithContent),
      ]}
      rows={rows}
      addDialog={({ closeDialog }) => <VehicleForm closeDialog={closeDialog} />}
    />
  );
};

const VehicleForm: React.FC<DialogProps> = ({ closeDialog }) => {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    closeDialog();
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">New vehicle</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingBlock: 1,
          }}
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
    </>
  );
};
