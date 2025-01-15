import React from "react";
import { Box, Paper, Typography } from "@mui/material";

function Podsumowanie() {
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
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Podsumowanie
        </Typography>
        <Typography variant="h6" textAlign="justify">
          Ten przykład wykorzystuje <strong>programowanie dynamiczne</strong>,
          aby pokazać, jak wyliczyć minimalną liczbę monet (w tym półpensówek i
          ćwiartek) potrzebną do wydania podanej kwoty w pensach. Stosujemy tu
          <em> siatkę podproblemów</em> (DP), z której odczytujemy minimalną
          liczbę „monet” dla każdej mniejszej kwoty, a następnie składamy
          rozwiązanie końcowe.
        </Typography>
      </Box>
    </Paper>
  );
}

export { Podsumowanie };
