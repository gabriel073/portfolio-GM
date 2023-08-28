import { Button, Stack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import '../my-Portfolio/src/App.css';


const ColorToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Stack>
            <Button onClick={() => toggleColorMode()} >
                {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Stack>
    )
}
export default ColorToggleMode;