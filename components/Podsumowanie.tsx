import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";

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
        <Typography variant="h6" textAlign="start" sx={{ mt: 2 }}>
          Zapraszam do przejrzenia kodu zrealizowanego w projekcie na GitHubie:{" "}
          <Link
            href="https://github.com/urban1991/algorytmy_projekt2"
            target="_blank"
            rel="noopener"
            style={{ color: "#3f51b5" }}
          >
            Link do repozytorium
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}

export { Podsumowanie };
