import { useSelector, useDispatch } from 'react-redux';
import RegisterFormulario from '../../components/RegisterFormulario/RegisterFormulario.component';
import { useContext, useState } from 'react';

import Context from '../../context';
// import { loginSession } from '../../redux/actions/session';
import { Link, Navigate } from 'react-router-dom';

export default function Register() {

    const context = useContext(Context);
    const logged = useSelector(state => state.logged);
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const [emailCheck, setEmailCheck] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const dispatch = useDispatch();

    let register = () => {
        //controlar formulario y guardar en localStorage y en redux
        // dispatch(logoutSession(false));

        setEmailCheck("");
        setPasswordCheck("");

        var emailFlag = "";
        var passwordFlag = "";

        if (emailValue.length === 0) {
            emailFlag += "El campo email no puede estar vacio\n";
        }
        if (passwordValue.length === 0) {
            passwordFlag += "El campo password no puede estar vacio\n";
        }
        if (passwordValue.length <= 5) {
            passwordFlag += "La contraseña debe tener un mínimo de 6 carácteres\n";
        }

        let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (!re.exec(emailValue)) {
            emailFlag += "El campo email no tiene un formato correcto\n";
        }

        if (!emailFlag && !passwordFlag) {
            //pasamos validacion y comprobamos si existe el usuario
            var users = localStorage.getItem("users");
            var welogged = false;
            if (users !== null) {
                users = JSON.parse(users);
                var result = false;
                for (let i = 0; i < users.length; i++) {
                    if (users[i]['user'] == emailValue) {
                        result = true;
                    }
                }
                if (!result) {
                    welogged = true;
                    var array_datos = { "user": emailValue, "password": passwordValue };
                    users[users.length] = array_datos;
                    // dispatch(loginSession(true));
                    context.loginSession(true);
                    setEmail("");
                    setPassword("");

                } else {
                    setEmailCheck("El email ya existe");
                }
            } else {
                users = [];
                welogged = true;
                users[0] = { "user": emailValue, "password": passwordValue };
                // dispatch(loginSession(true));
                context.loginSession(true);
                setEmail("");
                setPassword("");
            }
            if (welogged) {
                users = JSON.stringify(users);
                localStorage.setItem("users", users);
            }


        } else {
            //errores
            setEmailCheck(emailFlag);
            setPasswordCheck(passwordFlag);
        }
    }

    let changeField = (event) => {
        const name = event.target.id;
        const value = event.target.value;

        switch (name) {
            case 'email': setEmail(value); break;
            case 'password': setPassword(value); break;
            default: break;
        }
    }

    return (
        <Context.Consumer>
            {context => (
                <div className="allWidth" style={
                    { backgroundColor: context.esDeDia ? "#ffffff" : "#282c34" } }>
                    {(context.isLogged === false) ?
                        <div className={context.esDeDia ? 'text-dark' : 'text-white'}>
                            FORMULARIO DE REGISTRO
                        </div>
                        : ""}
                    {(context.isLogged === false) ? <RegisterFormulario clickRegister={register} clickChageField={changeField} emailValue={emailValue} emailCheck={emailCheck} passwordCheck={passwordCheck} passwordValue={passwordValue}>
                    </RegisterFormulario> : ""}
                </div>
            )}
        </Context.Consumer>
    );
}