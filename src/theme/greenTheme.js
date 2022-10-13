import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenTheme = createTheme({
    palette:{
        primary:{
            main:'#1be6f5'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main: red.A400
        }

    }
})