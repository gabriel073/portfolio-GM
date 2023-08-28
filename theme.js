import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
    // styles: {
    //     global: {
    //         // styles for the `body`
    //         html: {
    //             bg: 'yellow.700',
    //             color: 'white',

    //         },
    //     }
    // }
}

const theme = extendTheme({ config });


export default theme;