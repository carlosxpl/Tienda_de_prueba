export const LinkPropio = ({ className, href, children }) => {
    // Evitamos que la página se actualize y así no perder el estado.
    const onClick = (event) => {
        event.preventDefault();
        // Si quemos pasarle datos a la ruta, será en el primer
        // argumento en lugar de pasarle un objeto vacio {}.
        window.history.pushState({}, "", href);

        // Enviamos el cambio de ruta con un nuevo evento.
        const navEvent = new PopStateEvent('cambioDeRuta');
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};