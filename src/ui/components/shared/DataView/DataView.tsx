import React from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

type Props = Parameters<typeof DataGrid>[0] & {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  btn?: string | React.ReactNode;
  onBtnClick?: () => void;
};

export const DataView: React.FC<Props> = ({
  title,
  subtitle,
  btn,
  onBtnClick,
  ...props
}) => {
  return (
    <article>
      <Box
        component="section"
        sx={{ paddingBlock: 1, display: "flex", alignItems: "end" }}
      >
        <Box>
          {typeof title === "string" ? <h2>{title}</h2> : title}
          {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
        </Box>

        {Boolean(btn) && typeof btn === "string" ? (
          <Button sx={{ marginLeft: "auto" }} onClick={onBtnClick}>
            {btn}
          </Button>
        ) : (
          btn
        )}
      </Box>

      <Box component="section" sx={{}}>
        <DataGrid autoHeight {...props} />
      </Box>
    </article>
  );
};
