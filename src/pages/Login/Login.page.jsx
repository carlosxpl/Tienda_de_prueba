import { useSelector, useDispatch } from 'react-redux';
import LoggedFormulario from '../../components/LoggedFormulario/LoggedFormulario.component';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

import Context from '../../context';
// import { loginSession } from '../../redux/actions/session';

export default function Login(props) {

    const context = useContext(Context);
    const logged = useSelector(state => state.logged);
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const [emailCheck, setEmailCheck] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const dispatch = useDispatch();

    let login = () => {
        //controlar formulario y guardar en localStorage y en redux
        // dispatch(loginSession(true));
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

        let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (!re.exec(emailValue)) {
            emailFlag += "El campo email no tiene un formato correcto\n";
        }

        if (!emailFlag && !passwordFlag) {
            //pasamos validacion y comprobamos si existe el usuario
            var users = localStorage.getItem("users");

            if (users !== null) {
                users = JSON.parse(users);
                var result = false;
                for (let i = 0; i < users.length; i++) {
                    if (users[i]['user'] == emailValue && users[i]['password'] == passwordValue) {
                        result = true;
                    }
                }
                if (result) {
                    // dispatch(loginSession(true));
                    context.loginSession(true);
                    setEmail("");
                    setPassword("");
                }
                else {
                    setPasswordCheck("El email o la contraseña no coinciden");
                }
            } else {
                setPasswordCheck("El email o la contraseña no coinciden");
            }
        }
        else {
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
                <div className="d-flex  flex-column allWidth" style={
                    { backgroundColor: context.esDeDia ? "#ffffff" : "#282c34" }}>
                    {(context.isLogged === false) ?
                    <div className={context.esDeDia ? 'text-dark' : 'text-white'}>
                        FORMULARIO DE LOGIN
                        </div>
                        :""}
                    {(context.isLogged === false) ? <LoggedFormulario clickLogin={login} clickChageField={changeField} emailValue={emailValue} emailCheck={emailCheck} passwordCheck={passwordCheck} passwordValue={passwordValue}></LoggedFormulario> : ""}
                    {(context.isLogged === false) ? <div className={context.esDeDia ? 'd-flex mx-auto my-2 text-dark' : 'd-flex mx-auto my-2 text-white'}>
                        <div><strong>¿No tienes cuenta?</strong></div>&nbsp;
                        <Link className={context.esDeDia ? 'text-dark' : 'text-white'} to='/register'>REGISTRARSE</Link>
                    </div> : ""}
                </div>
            )}
        </Context.Consumer>
    );
}