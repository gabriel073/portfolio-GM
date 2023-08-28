import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Img, Link, Menu, MenuButton, MenuList, Stack, Text } from '@chakra-ui/react';
import './App.css';
import { HamburgerIcon } from '@chakra-ui/icons';
import Contacto from './Contacto';
import ColorToggleMode from '../ColorToggleMode';





function App() {

  return (
    <>

      <Stack justifyContent='center' bg="#1A202C"
        w={['100%']}>
        <Stack id='menu'  >
          <Flex className='navBar' justifyContent='space-around' alignContent='start' mb={110} p={15}>
            <Link className='link' href='#skills' >Skills</Link>
            <Link className='link' href='#proyectos'>Portafolio</Link>
            <Link className='link' href='#contacto'>Contacto</Link>
            <ColorToggleMode />
          </Flex>

          <Menu >
            <MenuButton
              className='menu'
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              mb={50}
              fontSize={50}
              w={20}
              h={20}
            />
            <MenuList className='menu' flexDirection='column' gap={10} zIndex='20'>
              <Link href='#skills'>Skills</Link>
              <Link href='#proyectos'>Portafolio</Link>
              <Link href='#contacto'>Contacto</Link>
            </MenuList>
          </Menu>


        </Stack>

        <Box position='fixed' display='flex' flexDirection='row' w='5%' h='15%' left='67rem' top='35rem' justifyContent='end' alignItems='end' className='arrow' index='-1'>
          <Link href='#menu'>

            <img src="https://icongr.am/entypo/arrow-with-circle-up.svg?size=64&color=currentColor" alt="subir" className='imgArrow' />

          </Link>
        </Box>


        <Stack display='flex' w='45rem' justifyContent='center' className='containerPrincip'>
          <h1>Sobre mi</h1>
          <Stack mb={150} flexDirection='row' className='sobre'>
            <Stack justifyContent='center' alignItems='center'  >
              <Img src="../assets/foto_perfil.jpg" className='imgPerfil' alt="foto_perfil" width='85%' borderRadius='45%' />
            </Stack>
            <Stack flexDirection='row' className='hola'>
              <p>Hola Soy Gabriel 👋,<br />
                <span>FullStack Developer</span>, apasionado por la informática y la pogramación me fui capacitando en diferentes institutos de Bs.As., Coder-house, Educación-It, y realicé este último Bootcamp en Soy-Henry donde egresé con un stack PERN,en nov. del 2022, de todas formas me sigo capacitando y abocándome a un perfil más Frontend, los invito a ver mis proyectos y poder formar parte de un gran equipo de desarrolladores, pronto 🙌.</p>
            </Stack>
          </Stack>


          <Stack mb={255} mt={30} id="skills"  >
            <h1 className="titleSkills" >Skills</h1>
            <Stack display='flex' flexDirection='row' flexWrap='wrap' gap='50' alignContent='center' justifyContent='center' height='30rem'>
              <img src='https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor' alt="icon-js" width='60' data-toggle="tooltip" title="Javascript" />
              <img src="https://icongr.am/devicon/nodejs-plain.svg?size=64&color=currentColor" alt="icon-nodeJs" width='60' data-toggle="tooltip" title="NodeJs" />
              <img src="https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor" alt="icon-typescript" width='60' data-toggle="tooltip" title="Typescript" />
              <img src="../assets/express.svg" alt="icon-express" width='60' data-toggle="tooltip" title="Express" />
              <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=64&color=currentColor" alt="icon-npm" width='60' data-toggle="tooltip" title="npm" />
              <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=64&color=currentColor" alt="icon-react" width='60' data-toggle="tooltip" title="React" />
              <img src="../assets/redux.svg" alt="icon-redux" width='60' data-toggle="tooltip" title="Redux" />
              <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=64&color=currentColor" alt="icon-mySql" width='60' data-toggle="tooltip" title="MySQL" />
              <img src="https://icongr.am/devicon/sequelize-original.svg?size=64&color=currentColor" alt="icon-sequelize" width='60' data-toggle="tooltip" title="Sequelize" />
              <img src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor" alt="icon-postgresSql" width='60' data-toggle="tooltip" title="PostgresSQL" />
              <img src="https://icongr.am/devicon/css3-original-wordmark.svg?size=64&color=currentColor" alt="icon-css" width='60' data-toggle="tooltip" title="CSS" />
              <img src="https://icongr.am/devicon/sass-original.svg?size=64&color=currentColor" alt="icon-sass" width='60' data-toggle="tooltip" title="SASS" />
              <img src="../assets/chakraui.svg" alt="icon-chakraUI" width='60' data-toggle="tooltip" title="ChakraUI" />
              <img src="https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=64&color=currentColor" alt="icon-boostrap" width='60' data-toggle="tooltip" title="Boostrap" />
              <img src="../assets/tailwindcss.svg" alt="icon-tailwind" width='60' data-toggle="tooltip" title="Tailwind" />
              <img src="https://icongr.am/devicon/git-original.svg?size=64&color=currentColor" alt="icon-git" width='60' data-toggle="tooltip" title="GIT" />
              <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=64&color=currentColor" alt="icon-github" width='60' data-toggle="tooltip" title="Github" />
              <img src="../assets/scrum-48x48.ico" alt="icon-scrum" width='60' data-toggle="tooltip" title="Scrum" />
              <img src="https://icongr.am/devicon/trello-plain.svg?size=64&color=currentColor" alt="icon-trello" width='60' data-toggle="tooltip" title="Trello" />
              <img src="../assets/notion.svg" alt="icon-notion" width='60' data-toggle="tooltip" title="Notion" />

            </Stack>
          </Stack >


          <Stack id="proyectos" mb={100} gap={30} >
            <h1 >Portafolio</h1>

            <Stack className='cards' m='auto' w='400px' direction={{ base: 'row', sm: 'column' }}>
              <Stack >
                <Card
                  overflow='hidden'
                  variant='outline'>
                  <Stack>
                    <CardBody>
                      <Heading size='md' mb={5}>Libreria Henry</Heading>
                      <Image
                        mb={5}
                        src='../assets/libreriaHenry.png'
                        alt='libreriaHenry'
                      />
                      <Text py='2'>
                        Este proyecto Pretende simular un e-commerce de venta de libros físicos, con funciones como: logueo, panel de control de usuarios, favoritos, dark mode, cambio idioma, simulación de pago con tarjeta.
                        Fue un proyecto con varios desarrolladores, donde se organizó y culminó éste trabajo organizado con metodología scrum.
                      </Text>
                    </CardBody>
                    <CardFooter justifyContent='center' gap={10}>
                      <Button variant='solid' backgroundColor='blue' width='30%' cursor='pointer' py={5} ><Link className='buttonsCards' target='_blank' href="https://henry-library.netlify.app/">ir al Demo</Link></Button>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='30%' py={5} ><Link className='buttonsCards' target='_blank' href="https://www.notion.so/Repos-App-Libreria-Henry-c8a1a2c5fc3948c09448243d5e1fc4dd">Repos</Link></Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                  </Stack>

                </Card>
              </Stack>
            </Stack>


            <Stack className='cards' m='auto' w='400px' direction={{ base: 'row', sm: 'column' }}>
              <Stack>
                <Card
                  overflow='hidden'
                  variant='outline'>
                  <Stack>
                    <CardBody>
                      <Heading size='md' mb={5}>App Food</Heading>
                      <Image
                        mb={5}
                        src='../assets/recipesApp.png'
                        alt='Caffe Latte'
                      />
                      <Text py='2'>
                        Recipe es una app para consultar recetas, crear, podes filtrar por tipos, ordenar alfabéticamente, fue realizada durante el bootcamp soy henry, utilizando las tecnologías: React, Javascript, NodeJs, PostgresSQL, express, una app sencilla pero completa.
                      </Text>
                    </CardBody>
                    <CardFooter justifyContent='center' gap={10}>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='50%' py={5} size='lg'><Link className='buttonsCards' target='_blank' href="https://youtu.be/8bP8FS9GXc0">ir al videoDemo</Link></Button>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='30%' py={5} size='lg'><Link className='buttonsCards' target='_blank' href="https://github.com/gabriel073/PI_FOOD">Repo</Link></Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                  </Stack>

                </Card>
              </Stack>
            </Stack>

            <Stack className='cards' m='auto' w='400px' direction={{ base: 'row', sm: 'column' }}>
              <Stack>
                <Card
                  overflow='hidden'
                  variant='outline'>
                  <Stack>
                    <CardBody>
                      <Heading size='md' mb={5}>Multi Games</Heading>
                      <Image
                        mb={5}
                        src='../assets/multiGames.png'
                        alt='multiGames'
                      />
                      <Text py='2'>
                        Multi Games es una aplicación web con un menú que contiene 3 juegos clásicos que atrapa al usuario a entrenerse y salir un poco de la rutina, el clásico juego de memoria donde hay que encontrar en un tablero ramdon, las 2 fichas que coinciden, el tipico tipeador de palabras por tiempo, y adivina pokemon donde aparece la silueta de personajes ramdon detrás de unas hierbas y tendrás que saber de quién se trata.
                      </Text>
                    </CardBody>
                    <CardFooter justifyContent='center' gap={10}>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='30%' py={5} size='lg'><Link className='buttonsCards' target='_blank' href="">ir al Demo</Link></Button>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='30%' py={5} size='lg'><Link className='buttonsCards' target='_blank' href="https://github.com/gabriel073/multiProjects">Repo</Link></Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                  </Stack>

                </Card>
              </Stack>
            </Stack>

            <Stack className='cards' m='auto' w='400px' direction={{ base: 'row', sm: 'column' }}>
              <Stack>
                <Card
                  overflow='hidden'
                  variant='outline'>
                  <Stack>
                    <CardBody>
                      <Heading size='md' mb={5}>PsicoEspacio en Linea</Heading>
                      <Image
                        mb={5}
                        src='../assets/psicoEspacio.png'
                        alt='psicoEspacio'
                      />
                      <Text py='2'>
                        En este caso se trata de un Land Page de un grupo de psicólogas que brindan su servicio en línea, este pryecto es interesante porque se trabajó con una diseñadora UI, es notable su trabajo y una gran experiencia del trabajo en equipo.-
                      </Text>
                    </CardBody>
                    <CardFooter justifyContent='center' gap={10}>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='30%' py={5} size='lg'><Link className='buttonsCards' target='_blank' href="https://psicoespacio-web.vercel.app/">ir al Demo</Link></Button>
                      <Button variant='solid' cursor='pointer' backgroundColor='blue' width='30%' py={5} size='lg'><Link className='buttonsCards' target='_blank' href="https://github.com/gabriel073/land_page_psicoEspacio">Repo</Link></Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                  </Stack>

                </Card>
              </Stack>
            </Stack>

          </Stack>


          <Contacto />


        </Stack >
      </Stack>

    </>

  )

}



export default App;
