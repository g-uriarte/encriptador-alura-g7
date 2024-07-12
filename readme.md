# Encriptador

Reto propuesto por el grupo de alura.

## Objetivo

Crear una página en la que el usuario pueda encriptar y desencriptar texto.

La encriptación del texto se basa en sustituir los siguientes caracteres:

| caracter | texto |
|----------|-------|
|a         |ai     |
|e         |enter  |
|i         |imes   |
|o         |ober   |
|u         |ufat   |

## Recursos proporcionados:

[Modelo figma](https://www.figma.com/design/iSPuMZC2X89C0i6XDKiGDx/Alura-Challenge---Desaf%C3%ADo-1---L%C3%B3gica-(Copy)?node-id=2-72&t=ln9iC6zakz7uGEM1-0)

Trello - Se nos proporciono un tablero con indicaciones y una ruta a seguir (opcional).

## Implementación de requisitos

### Estilos - Layout y más

El layout se ha desarrollado usando grid, en especifico grid-template, grid-template-area y sus variantes.

- Se comenzco implementando los estilos pensando primero en dispositivos pequeños ([mobile first](https://developer.mozilla.org/es/docs/Glossary/Mobile_First)).

- Se hizo uso de las [variables css](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)(custom properties) para definir los colores definidos en el figma. También se uso para evitar repeticiones en componentes y definir sus variantes.

- Uso de fuente Inter.

### Encriptador

Para encriptar el texto se realizo un algoritmo, en el cual se recorre cada caracter
del texto a encriptar y cambiando este por el texto encriptado si es una de las letras a sustituir.

Para desencriptar se reemplaza todas las apariciones de los textos encriptados por sus correspondientes caracteres.

## Funcionalidades agregadas

- Toast. Se agrego la posibilidad de crear mensajes emergentes, en lugar de usar alert(). 
Esto evita que paremos el hilo de ejecución y a su vez poder personalizar el mensaje emergente.

- Posibilidad de copiar el mensaje encriptado o desencriptado.

- Se muestran los errores en pantalla usando un mensaje emergente (toast).