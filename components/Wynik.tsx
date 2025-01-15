import React from "react";
import { Box, Typography } from "@mui/material";

type WynikProps = {
  result: Record<string, number> | null;
  inputValue: string;
};

function Wynik({ result, inputValue }: WynikProps) {
  const cointCount =
    result && Object.values(result).reduce((acc, val) => acc + val, 0);
  return result ? (
    <Box
      mt={2}
      sx={{
        backgroundColor: "#fff",
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="body1" gutterBottom>
        Do wydania podanej kwoty <strong>{inputValue}</strong> w pensach
        potrzeba:
      </Typography>

      {Object.entries(result).map(([coinName, count]) => (
        <Typography
          key={coinName}
          variant="body2"
          sx={{ ml: 1, fontSize: "1rem" }}
        >
          {coinName}: {count}
        </Typography>
      ))}

      <Typography variant="body1" mt={2}>
        Do wydania podanej kwoty <strong>{inputValue}</strong> potrzeba:{" "}
        <strong>{cointCount}</strong> monet.
      </Typography>
    </Box>
  ) : (
    <></>
  );
}

export { Wynik };
