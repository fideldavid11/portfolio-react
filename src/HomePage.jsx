import React, { useEffect, useState } from 'react';
import Renderizador from './Renderizador3D';
import backgroundImage from './assets/1.jpg'; // Importa la imagen de fondo

function HomePage() {
    const [text, setText] = useState('');
    const [phrases] = useState([
        "Hi, I'm Fidel Peguero",
        "Hi, I'm a Software Developer",
        "Hi, I'm Fidel Peguero and I'm a Software Developer"
    ]);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed] = useState(100); // Velocidad más lenta

    useEffect(() => {
        const typeWriter = () => {
            const currentPhrase = phrases[phraseIndex];

            setText(currentPhrase.substring(0, characterIndex));

            if (!isDeleting) {
                if (characterIndex < currentPhrase.length) {
                    setCharacterIndex(prev => prev + 1);
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (characterIndex === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                } else {
                    setCharacterIndex(prev => prev - 1);
                }
            }
        };

        const timeout = setTimeout(() => {
            typeWriter();
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, phrases, phraseIndex, characterIndex, isDeleting, speed]);

    const containerStyles = {
        backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
        backgroundSize: 'cover', // Establece la imagen para cubrir completamente el contenedor
        backgroundPosition: 'center', // Centra la imagen en el contenedor
        padding: '100px 0 0', // Ajusta el padding para el espacio superior y elimina el margen superior
        margin: '0', // Elimina cualquier margen que pueda existir
        width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
        height: '100vh', // Asegura que el contenedor ocupe toda la altura disponible
        position: 'relative', // Establece una posición relativa para el contenedor
    };

    const typingStyles = {
        position: 'absolute', // Posición absoluta para la animación de typing
        top: '165px', // Ajusta la distancia desde la parte superior
        left: '20px', // Ajusta la distancia desde el borde izquierdo
        color: '#fff', // Color del texto blanco
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        padding: '16px', // Espacio interior del título
        borderRadius: '8px', // Bordes redondeados para suavizar la apariencia del título
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra más larga
    };

    return (
        <div id="inicio" style={containerStyles}>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4" style={typingStyles}>{text}</h1>
                <p className="text-lg mb-4 text-white">Aquí puedes explorar nuestro contenido en 3D:</p>
                <Renderizador />
            </div>
        </div>
    );
}

export default HomePage;
