import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
    getMinimalCoinDistributionCodeString,
    getMinimalCoinDistributionCodeStringWithComments
} from "@/utills/codeStringSnippets";

function Snippets() {
    return (
        <>
            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    Implementacja funkcji{" "}
                    <code style={{ color: "purple" }}>getMinimalCoinDistribution</code>,
                    która oblicza minimalną liczbę monet potrzebną do wydania kwoty
                    podanej w pensach.
                </Typography>
                <Card
                    sx={{
                        mt: 2,
                        boxShadow: 3,
                        borderRadius: 2,
                    }}
                >
                    <CardContent sx={{ p: 0 }} style={{padding: 0}}>
                        <SyntaxHighlighter language="typescript" style={materialDark}>
                            {getMinimalCoinDistributionCodeString}
                        </SyntaxHighlighter>
                    </CardContent>
                </Card>
            </Box>


            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    Funkcja{" "}
                    <code style={{ color: "purple" }}>getMinimalCoinDistribution</code>
                    z komentarzami.
                </Typography>
                <Card sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }} >
                    <CardContent sx={{ p: 0 }} style={{padding: 0}}>
                        <SyntaxHighlighter language="typescript" style={materialDark}>
                            {getMinimalCoinDistributionCodeStringWithComments}
                        </SyntaxHighlighter>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export {Snippets};
