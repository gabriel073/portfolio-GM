import { Flex, Link, Stack } from '@chakra-ui/react';
import './App.css';



function App() {
  return (
    <>
      <Flex id='menu' justifyContent='space-around' alignContent='start' mb={200} >
        <Link textDecoration='none' href='#skills' >Skills</Link>
        <Link textDecoration='none' href='#proyectos'>Proyectos</Link>
        <Link textDecoration='none' href='#contacto'>Contacto</Link>
      </Flex>

      <Stack display='flex' w='45rem'>

        <Stack mb={150}>
          <h2 >Sobre mi</h2>
          <Stack display='flex' flexDirection='row'>
            <img src="../src/assets/foto_perfil.jpg" alt="foto_perfil" width='40%' />
            <p>Hola Soy Gabriel 👋,
              <span>FullStack Developer</span>, apasionado por la informática y la pogramación me fui capacitando en diferentes institutos de Bs.As., Coder-house, Educación-It, y realicé este último Bootcamp en Soy-Henry donde egresé con un stack -PERN-,en nov. del 2022, de todas formas me sigo capacitando y abocándome a un perfil más Frontend, los invito a ver mis proyectos y poder formar parte de un gran equipo de desarrolladores, pronto</p>
          </Stack>
        </Stack>


        <Stack position='fixed' right='15rem' top='40rem'>
          <Link href='#menu'>
            <img src="https://icongr.am/entypo/arrow-with-circle-up.svg?size=64&color=currentColor" alt="subir" />
          </Link>
        </Stack>


        <Stack mb={150}>
          <h2 id="skills">Skills</h2>
          <Stack display='flex' flexDirection='row' flexWrap='wrap' gap='50' cursor='pointer'>
            <img src='https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor' alt="icon-js" width='60' />
            <img src="https://icongr.am/devicon/nodejs-plain.svg?size=64&color=currentColor" alt="icon-nodeJs" width='60' />
            <img src="https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor" alt="icon-typescript" width='60' />
            <img src="../src/assets/express.svg" alt="icon-express" width='60' />
            <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=64&color=currentColor" alt="icon-npm" width='60' />
            <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=64&color=currentColor" alt="icon-react" width='60' />
            <img src="../src/assets/redux.svg" alt="icon-redux" width='60' />
            <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=64&color=currentColor" alt="icon-mySql" width='60' />
            <img src="https://icongr.am/devicon/sequelize-original.svg?size=64&color=currentColor" alt="icon-sequelize" width='60' />
            <img src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor" alt="icon-postgresSql" width='60' />
            <img src="https://icongr.am/devicon/css3-original-wordmark.svg?size=64&color=currentColor" alt="icon-css" width='60' />
            <img src="https://icongr.am/devicon/sass-original.svg?size=64&color=currentColor" alt="icon-sass" width='60' />
            <img src="../src/assets/chakraui.svg" alt="icon-chakraUI" width='60' />
            <img src="https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=64&color=currentColor" alt="icon-boostrap" width='60' />
            <img src="../src/assets/tailwindcss.svg" alt="icon-tailwind" width='60' />
            <img src="https://icongr.am/devicon/git-original.svg?size=64&color=currentColor" alt="icon-git" width='60' />
            <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=64&color=currentColor" alt="icon-github" width='60' />
            <img src="../src/assets/scrum-48x48.ico" alt="icon-scrum" width='60' />
            <img src="https://icongr.am/devicon/trello-plain.svg?size=64&color=currentColor" alt="icon-trello" width='60' />
            <img src="../src/assets/notion.svg" alt="icon-notion" width='60' />

          </Stack>
        </Stack>

        <Stack mb={150}>
          <h1 id="proyectos">Proyectos</h1>
        </Stack>

        <Stack mb={150}>
          <h1 id="contacto">Contacto</h1>
        </Stack>

      </Stack>

    </>

  )
}

export default App
