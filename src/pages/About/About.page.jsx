import { useContext } from 'react';
import './About.page.scss';
import Context from '../../context';


export default function About() {
    const context = useContext(Context);
    return (
        <div className="About allWidth" style={
            { backgroundColor: context.esDeDia ? "#ffffff" : "#282c34" }}>
            <h1 className={context.esDeDia ? 'text-dark' : 'text-white'}>Todo sobre mi tienda</h1>
        </div>
    );
}