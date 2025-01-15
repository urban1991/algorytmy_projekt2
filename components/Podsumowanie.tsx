import React from 'react';
import {Box, Typography} from "@mui/material";

function Podsumowanie() {
    return (
        <Box mb={4}>
            <Typography variant="h6" gutterBottom>
                Podsumowanie
            </Typography>
            <Typography variant="body1">
                Ten przykład wykorzystuje <strong>programowanie dynamiczne</strong>
                , aby pokazać, jak wyliczyć minimalną liczbę monet (w tym półpensówek i ćwiartek)
                potrzebną do wydania podanej kwoty w pensach. Stosujemy tu
                <em> siatkę podproblemów</em> (DP), z której odczytujemy minimalną liczbę
                „monet” dla każdej mniejszej kwoty, a następnie składamy rozwiązanie końcowe.
            </Typography>
        </Box>
    );
}

export {Podsumowanie};
