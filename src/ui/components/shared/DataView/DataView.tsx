import React, { useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

export type DialogProps = {
  closeDialog: () => void;
};

export type BaseProps = {
  rows: GridRowsProp;
  columns: (
    openDialogWithContent: (
      contentFn: (props: DialogProps) => React.ReactNode
    ) => void
  ) => GridColDef[];
};

type Props = BaseProps & {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  addDialog?: (props: DialogProps) => React.ReactNode;
};
export const DataView: React.FC<Props> = ({
  title,
  subtitle,
  columns,
  rows,
  addDialog,
}) => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode | null>(
    null
  );

  const openDialog = () => {
    addDialog && setDialogContent(addDialog({ closeDialog }));
  };

  const openDialogWithContent = (
    content: (props: DialogProps) => React.ReactNode
  ) => {
    setDialogContent(content({ closeDialog }));
  };

  const closeDialog = () => {
    setDialogContent(null);
  };

  return (
    <article>
      {Boolean(addDialog) && (
        <Box
          component="section"
          sx={{ paddingBlock: 1, display: "flex", alignItems: "end" }}
        >
          <Box>
            {typeof title === "string" ? <h2>{title}</h2> : title}
            {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
          </Box>

          <Button sx={{ marginLeft: "auto" }} onClick={openDialog}>
            Add
          </Button>
        </Box>
      )}
      <Box component="section" sx={{}}>
        <DataGrid
          rows={rows}
          columns={columns(openDialogWithContent)}
          autoHeight
        />
      </Box>

      <Dialog
        open={Boolean(dialogContent)}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        {dialogContent}
      </Dialog>
    </article>
  );
};
