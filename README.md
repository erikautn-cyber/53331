# Analizador Sintáctico y Semántico - 5331

Este proyecto es un analizador desarrollado con ANTLR4 y Node.js para la materia Sintaxis y Semántica de los Lenguajes.
## Requisitos
-Node.js instalado.
-Ejecutar `npm install` dentro de la carpeta `/analizador` para descargar las dependencias.

## Instrucciones de Ejecución
1) Abrir una terminal en la carpeta `/analizador`.
2) Para correr el programa, usar el comando:
   node index.js
3) El resultado mostrará la Tabla de Lexemas, el Árbol Sintáctico y las validaciones del Análisis Semántico.

Se incluyeron ejemplos para verificar si el analizador es capas de detectar errores:
correcto1.txt / correcto2.txt: Casos con sintaxis y semántica válida.
incorrecto1.txt / incorrecto2.txt: Casos que disparan errores de semántica.

Como se muestra en la imagen es necesario tener en la carpeta del analizador:
-antlr-4.13.2-complete.jar
  Es necesario ejecutar npm install para generar la carpeta node_modules con las dependencias necesarias. Sin esto, el código no podrá correrse.
<img width="923" height="360" alt="programa" src="https://github.com/user-attachments/assets/758b43c3-910a-4bc4-bb6a-415e3377cd5a" />
