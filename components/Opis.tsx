import React from 'react';
import {Box, Paper, Typography} from "@mui/material";

function Opis() {
    return (
        <Box mb={4}>
            <Paper
                elevation={2}
                sx={{ p: 3, backgroundColor: "#fafafa", borderRadius: 2}}
            >
                <Typography variant="h5" gutterBottom>
                    Treść zadania:
                </Typography>
                <Typography variant="h6">
                    W czasach Sherloka Holmesa w epoce Królowej Wiktorii
                    Anglia miała skomplikowany system monetarny:
                    <br />
                    - 1 funt = 20 szylingów <br />
                    - 1 szyling = 12 pensów <br />
                    - 1 pens dzielił się na dwie półpensówki lub 4 ćwiartki <br />
                    - 1 korona = 5 szylingów <br />
                    - 1 gwinea = 21 szylingów <br />
                    Należy napisać program, korzystający z programowania dynamicznego,
                    który dowolną sumę wyrażoną w pensach wyda
                    korzystając z najmniejszej ilości jednostek monetarnych
                    (uwzględniając półpensówki i ćwiartki).
                </Typography>
            </Paper>
        </Box>
    );
}

export {Opis};
