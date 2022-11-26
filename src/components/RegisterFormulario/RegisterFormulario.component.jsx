export default function RegisterFormulario(props) {


    const { clickChageField, emailValue, emailCheck, passwordCheck, passwordValue } = props;

    return (
        <div className="">
            <form>
                <div className="form-group my-2">
                    <input type="email" className="form-control" onChange={clickChageField} value={emailValue} id="email" placeholder="EMAIL"></input>
                    <div className={emailCheck ? 'error-message' : 'd-none'}>{emailCheck}</div>
                </div>
                <div className="form-group my-2">
                    <input type="password" className="form-control" onChange={clickChageField} value={passwordValue} id="password" placeholder="CONTRASEÑA"></input>
                    <div className={passwordCheck ? 'error-message' : 'd-none'}>{passwordCheck}</div>
                </div>
                <button onClick={props.clickRegister} className="btn btn-light my-2" type="button" >ENVIAR</button>
            </form>

        </div>
    );
}