import { extendTheme } from "@chakra-ui/react"


const theme = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },
    styles:{
        global:{
            body:{
                margin:0,
                "fontFamily":
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            },
            code:{
                "fontFamily":
                "source-code-pro, Menlo, Monaco, Consolas"
            },
        },
    },
}

export default extendTheme(theme);