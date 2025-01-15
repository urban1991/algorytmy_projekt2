import React from "react";
import { Paper, Typography } from "@mui/material";

function Header() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #f5f5f5, #fff)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#3f51b5",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          mb: 2,
        }}
      >
        ALGORYTMY 1 - PROJEKT 2
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#555" }}>
        Aplikacja demonstrująca wykorzystanie programowania dynamicznego.
      </Typography>
    </Paper>
  );
}

export { Header };
