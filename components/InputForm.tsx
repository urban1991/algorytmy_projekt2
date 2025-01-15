import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

type InputFormProps = {
  inputValue: string;
  isValid: boolean;
  warningMsg: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCalculate: () => void;
};

function InputForm({
  inputValue,
  handleCalculate,
  handleChange,
  isValid,
  warningMsg,
}: InputFormProps) {
  return (
    <Box
      mb={2}
      display="flex"
      gap={2}
      alignItems="center"
      sx={{ flexWrap: "wrap" }}
    >
      <Typography variant="h5" gutterBottom width="100%">
        Przetestuj działanie algorytmu
      </Typography>

      <TextField
        label="Kwota w pensach"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        error={!isValid && !!inputValue}
        helperText={warningMsg}
      />
      <Button
        variant="contained"
        onClick={handleCalculate}
        disabled={!isValid || !inputValue}
        sx={{
          height: 56,
          width: 120,
          textTransform: "none",
          backgroundColor: "#3f51b5",
          ":hover": {
            backgroundColor: "#303f9f",
          },
        }}
      >
        Oblicz
      </Button>
    </Box>
  );
}

export { InputForm };
