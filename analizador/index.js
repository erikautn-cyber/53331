//Tiene el main
import analizadorLexer from "./generated/analizadorLexer.js";
import analizadorParser from "./generated/analizadorParser.js";
import CustomanalizadorVisitor from "./CustomanalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// 1) Cargamos el código de prueba desde un archivo externo
const input = fs.readFileSync('codigo.txt', 'utf8');

// 2) Creamos el flujo de caracteres
const chars = new antlr4.InputStream(input);

// 3) Análisis Léxico: Convertimos texto en tokens
const lexer = new analizadorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 4) Análisis Sintáctico: Construir el árbol a partir de la regla inicial 'programa'
const parser = new analizadorParser(tokens);

//PUNTO 2: Mostrar tabla de lexemas-tokens
console.log("TABLA DE LEXEMAS-TOKENS:");
// Obtenemos los tokens desde el stream de tokens, que es más seguro
const todosLosTokens = tokens.tokens; 
todosLosTokens.forEach(t => {
    // Si el tipo es mayor a 0 (para ignorar el fin de archivo o errores)
    if (t.type > 0) {
        const nombreToken = parser.vocabulary.getSymbolicName(t.type);
        console.log(`Lexema: [${t.text}]  <-->  Token: ${nombreToken}`);
    }
});

const tree = parser.programa(); 

//PUNTO 3: Mostrar Árbol Sintáctico
console.log("\n--- Árbol Sintáctico ---");
// Genera el árbol en texto
console.log(tree.toStringTree(parser.ruleNames));
console.log("------------------------\n");

// 5) Análisis Semántico: Ejecutamos el Visitor personalizado
console.log("--- Iniciando Análisis Semántico ---");
const visitor = new CustomanalizadorVisitor();
visitor.visit(tree);
console.log("--- Análisis Finalizado ---");