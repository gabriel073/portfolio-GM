import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



const ColorToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (

        <Button onClick={() => toggleColorMode()}>
            {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}
export default ColorToggleMode;