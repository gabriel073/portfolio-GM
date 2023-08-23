// import { Button, Input, InputGroup, Stack, Text, Textarea } from '@chakra-ui/react';
import { Button, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';




export default function Contacto() {


    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNameError(false);
        setEmailError(false);
        setMessageError(false);

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    const handleSubmit = event => {
        event.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        if (!formData.name) {
            return setNameError("Este campo no puede estar vacio, favor de ingresar un nombre");
        }
        if (!formData.name.split("").every(char => isNaN(parseInt(char)))) {
            return setNameError("Su nombre no puede contener numeros");
        }
        if (!formData.email) {
            return setEmailError("Este campo no puede estar vacio, favor de ingresar un Mail");
        }
        if (!paternEmail.test(formData.email)) {
            return setEmailError("No es un formato de Mail válido");
        }
        if (!formData.message) {
            return setMessageError("Este campo no puede estar vacio, favor de ingresar un Mensaje");
        }
        alert(`Datos Enviados con exito!!! <br/> ${formData.name}, ${formData.email}, ${formData.message}`);

        setFormData({
            name: "",
            email: "",
            message: "",
        }
        )

    }

    return (
        <Stack mb={150} m='auto' h={620} w={500} alignItems='center' spacing={3} borderRadius={40}
            border='solid white 2px'>
            <div id="contacto">
                <h1>Contacto</h1>
                <form action="https://formsubmit.co/gaby_developer900@yopmail.com" method="POST" onSubmit={handleSubmit} >
                    <input type="hidden" name="_template" value="basic" />
                    <label htmlFor="nombre">Nombre:</label>
                    <Input
                        h={25}
                        type="text"
                        width='100%'
                        mb='60px'
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <Stack color='red' mb='-50px' mt='-40px'>
                        {nameError && <p>{nameError}</p>}
                    </Stack>
                    <br /><br />

                    <label htmlFor="email">Email:</label>
                    <Input
                        h={25}
                        type="email"
                        id="email"
                        name="email"
                        mb='60px'
                        width='100%'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <Stack color='red' mb='-50px' mt='-40px'>
                        {emailError && <p>{emailError}</p>}
                    </Stack>
                    <br /><br />


                    <label htmlFor="mensaje">Mensaje:</label><br />
                    <Textarea
                        mb='50px'
                        id="message"
                        name="message"
                        rows="8"
                        cols="50"
                        width='100%'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></Textarea>
                    <Stack color='red' mb='-50px' mt='-50px'>
                        {messageError && <p>{messageError}</p>}
                    </Stack>
                    <br /><br />

                    <Button type="submit" onClick={handleSubmit} backgroundColor='blue' mt={20} width='80%' h='40px' >Enviar</Button>
                </form>
            </div>
            <Stack mt='2%'>
                <Text >By Gabriel 🤓</Text>
            </Stack>
        </Stack >
    );
}

