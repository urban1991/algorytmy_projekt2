'use client';
import React, { useState } from "react";
import {
    Container,
    Box,
    Paper, SxProps, Theme
} from "@mui/material";

import {isValidCoinAmount} from "@/utills/isValidCoinAmount";
import {getMinimalCoinDistribution} from "@/utills/getMinCoinDistribution";
import {Podsumowanie} from "@/components/Podsumowanie";
import {Header} from "@/components/Header";
import {Opis} from "@/components/Opis";
import {Wynik} from "@/components/Wynik";
import {Snippets} from "@/components/Snippets";
import {InputForm} from "@/components/InputForm";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [warningMsg, setWarningMsg] = useState("");
    const [result, setResult] = useState<Record<string, number> | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);

        if (!val) {
            setIsValid(true);
            setWarningMsg("");
            setResult(null);
            return;
        }

        if (isValidCoinAmount(val)) {
            setIsValid(true);
            setWarningMsg("");
        } else {
            setIsValid(false);
            setWarningMsg("Dozwolone są tylko liczby całkowite lub format x.25, x.5, x.75");
            setResult(null);
        }
    };

    const handleCalculate = () => {
        if (!inputValue || !isValid) return;

        console.log(`inputValue: `, Number(inputValue))

        const distribution = getMinimalCoinDistribution(Number(inputValue));
        setResult(distribution);
    };


    const paperProps:  SxProps<Theme> = {
        p: 3,
        backgroundColor: "#fafafa",
        borderRadius: 2,
        boxShadow: 3
    }

    const boxProps: SxProps<Theme> = {
        background: "linear-gradient(135deg, #e0f2f1, #fff)",
        minHeight: "100vh",
        py: 6,
    }

    return (
        <Box sx={boxProps}>
            <Container maxWidth="md">
                <Header />
                <Opis />

                <Box mb={4}>
                    <Paper elevation={2} sx={paperProps}>
                        <InputForm
                            inputValue={inputValue}
                            handleCalculate={handleCalculate}
                            handleChange={handleChange}
                            isValid={isValid}
                            warningMsg={warningMsg}
                        />

                        <Wynik result={result} inputValue={inputValue} />
                    </Paper>
                </Box>

                <Snippets />

                <Podsumowanie />
          </Container>
      </Box>
    );
}
