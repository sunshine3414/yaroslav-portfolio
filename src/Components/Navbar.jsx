import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Link, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import logo from '../Images/favicon.webp'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

import Resume from '../Resume/Yaroslav_Bilko.pdf'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box className='navbar'>
            <Box className='logo'>
                {/* <Box>
                    <Image src={logo} alt='Portfolio logo' />
                </Box> */}
                <Box className='name' marginLeft={['0', '0', '0', '90px']}>
                    <Heading> Yaroslav.B</Heading>
                    <Heading> Yaroslav.B</Heading>
                </Box>
            </Box>
            <Box display={["none", 'none', 'none', 'flex']} className="nav-options">
                <Box>
                    <Button><Link href="#"><span>Home</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#aboutMe"><span>About me</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#skills"><span>Skills</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#projects"><span>Projects</span></Link></Button>
                </Box>
                <Box>
                    <Button onClick={()=>{window.open("https://drive.google.com/file/d/161wJ3vB9M4IF8qtbn_Eeky6kN6e3JfYS/view?usp=sharing", '_blank')}}><a href={Resume} download="Yaroslav_Bilko"><span>Resume</span></a></Button>
                </Box>
                <Box>
                    <Button><Link href="#contactMe"><span>Contact</span></Link></Button>
                </Box>
            </Box>
            <Button ref={btnRef} display={["block", 'block', 'block', 'none']} onClick={() => {
                isOpen ? onClose() : onOpen()
            }}>
                {
                    isOpen ? <VscChromeClose /> : <GiHamburgerMenu />
                }
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent className="drawer">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box display={['flex', 'none']}  className='logo'>
                            <Box>
                                <Image src={logo} alt='Portfolio logo' />
                            </Box>
                            <Box className='name' >
                                <Heading> Yaroslav.B</Heading>
                                <Heading> Yaroslav.B</Heading>
                            </Box>
                        </Box>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box><Link href='#' onClick={() => onClose()}>Home</Link></Box>
                        <Box><Link href='#aboutMe' onClick={() => onClose()}>About me</Link></Box>
                        <Box><Link href='#skills' onClick={() => onClose()}>Skills</Link></Box>
                        <Box><Link href='#projects' onClick={() => onClose()}>Projects</Link></Box>
                        <Box><Link href='#resume' onClick={() => onClose()}>Resume</Link></Box>
                        <Box><Link href='#contactMe' onClick={() => onClose()}>Contact</Link></Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navbar