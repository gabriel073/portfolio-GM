import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Stack, Text, Textarea } from '@chakra-ui/react';

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

export default function Contacto() {

    const form = useRef();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        if (!form.current.name) {
            return setNameError("Este campo no puede estar vacio, favor de ingresar un nombre");
        }
        if (!form.current.name.value.split("").every(char => isNaN(parseInt(char)))) {
            return setNameError("Su nombre no puede contener numeros");
        }
        if (!form.current.name) {
            return setEmailError("Este campo no puede estar vacio, favor de ingresar un Mail");
        }
        if (!paternEmail.test(form.current.email.value)) {
            return setEmailError("No es un formato de Mail válido");
        }
        if (!form.current.message) {
            return setMessageError("Este campo no puede estar vacio, favor de ingresar un Mensaje");
        }


        emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
            .then((result) => {
                console.log('VARIABLE ENTORNO', VITE_SERVICE_ID);
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        form({
            ...form,
            [name]: value
        });
    }

    const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    return (
        <Stack mb={150} m='auto' h={620} w={500} alignItems='center' spacing={3} borderRadius={40}
            border='solid white 2px'>
            <div id="contacto">
                <h1>Contacto</h1>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <Input
                        h={25}
                        type="text"
                        width='100%'
                        mb='0px'
                        id="name"
                        name="user_name"
                        // value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <Stack color='red' mb='0px' mt='0px'>
                        {nameError && <p>{nameError}</p>}
                    </Stack>
                    <label>Email</label>
                    <Input
                        h={25}
                        type="email"
                        id="email"
                        name="user_email"
                        mb='10px'
                        width='100%'
                        // value={formData.email}
                        onChange={handleInputChange}

                    />
                    <Stack color='red' mb='0px' mt='0px'>
                        {emailError && <p>{emailError}</p>}
                    </Stack>
                    <label>Mensaje</label>
                    <Textarea
                        mb='40px'
                        id="message"
                        name="message"
                        rows="8"
                        cols="50"
                        width='100%'
                        // value={formData.message}
                        onChange={handleInputChange}

                    ></Textarea>
                    <Stack color='red' mb='0px' mt='0px'>
                        {messageError && <p>{messageError}</p>}
                    </Stack>
                    <Input type="submit" value="Send" backgroundColor='blue' mt={20} width='80%' h='40px' />
                </form>
            </div>
            <Stack mt='2%'>
                <Text >By Gabriel 🤓</Text>
            </Stack>
        </Stack >
    );
}


