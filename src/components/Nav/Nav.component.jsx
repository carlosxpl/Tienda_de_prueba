import './Nav.component.scss';
import { Link } from 'react-router-dom';
import Context from '../../context';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

export default function Nav() {

    const context = useContext(Context);


    let logout = () => {
        context.loginSession(false);
    }

    // const [esDeDia, setDia] = useState(true);

    let texto = context.esDeDia ?
        (<div>Cambiar a modo nocturno <FontAwesomeIcon icon={faMoon} /></div>) :
        (<div>Cambiar a modo diurno <FontAwesomeIcon icon={faSun} /></div>);

    return (
        <Context.Consumer>
            {context => (
                <div className='w-100' style={
                    { backgroundColor: context.esDeDia ? "#ffffff" : "#282c34" }
                }>
                    {context.isLogged == true ?
                        <div className='Nav d-flex w-100'>
                            <button className="btn btn-light ml-auto me-2" onClick={logout}>LOGOUT</button>
                        </div>
                        : ""}
                    <div className="Nav d-flex w-100">
                        {context.isLogged !== true ? <div className='btn btn-light mx-auto'>
                            <Link className="" to='/login'>INICIO DE SESSIÓN</Link>
                        </div> : ""}
                        {context.isLogged !== true ?
                            <div className='btn btn-light mx-auto'>
                                <Link className="" to='/register'>REGISTRARSE</Link>
                            </div> : ""}
                        {context.isLogged == true ?
                            <div className='btn btn-light mx-auto'>
                                <Link className="" to='/store'>STORE</Link>
                            </div> : ""}
                        {context.isLogged == true ?
                            <div className={context.esDeDia ? 'mx-auto text-dark' : 'mx-auto text-white'}>
                                BIENVENIDO AL SISTEMA
                            </div>
                            : ""}
                        {context.isLogged == true ?
                            <div className='btn btn-light mx-auto'>
                                <Link className="" to='/about'>ABOUT</Link>
                            </div> : ""}
                        <div className='mx-auto'>
                            <button className="btn btn-primary" onClick={() => {
                                // setDia(!esDeDia)
                                context.botonDia(!context.esDeDia);
                            }
                            }>
                                {texto}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Context.Consumer>
    );
}