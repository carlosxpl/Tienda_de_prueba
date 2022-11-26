import { useEffect, useState } from "react";

export const RoutePropio = ({ path, children }) => {
    // Vamos a enlazar la URL al estado de la ruta, para forzar
    // un re-renderizado del componente cada vez que detectemos
    // un cambio (Esto lo haremos en el useEffect).
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Función que modificará el estado
        const onLocationChange = () => {
            console.log('La propiedad location ha cambiado');
            setCurrentPath(window.location.pathname);
        }

        // Agregamos una escucha al evento 'cambioDeRuta' para lanzar la función.
        window.addEventListener('cambioDeRuta', onLocationChange);

        // Eliminaremos el evento cuando ya no sea necesario
        return () => {
            window.removeEventListener('cambioDeRuta', onLocationChange);
        }
    }, [])

    // Vamos a renderizar el componente que recibimos como prop
    return currentPath === path ? children : null
}