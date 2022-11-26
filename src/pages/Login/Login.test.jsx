    let emailExist = (email) => {
        var users = localStorage.getItem("users");

        if (users !== null) {
            users = JSON.parse(users);
            var result = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i]['user'] == email) {
                    result = true;
                }
            }
            return result;
        } else {
            return false;
        }
    }

describe('Tests para la funcion emailExist', () => {
    // Tests creado anteriormente
    it('Deberia retornar un true porque el email carlosplaza@twentic.com no existe', () => {
        expect(emailExist("carlosplaza@twentic.com")).not.toBeTruthy()
    })

    it('Deberia retornar un false porque el email prueba@twentic.com existe', () => {
        expect(emailExist("prueba@twentic.com")).toBeTruthy()
    })

    it('Deberia retornar un true porque el email pruebaTrue@twentic.com no existe', () => {
        expect(emailExist("pruebaTrue@twentic.com")).toBeFalsy()
    })
})