grammar analizador;
// REGLAS DEL PARSER
programa: (instruccion)+ ;
// Una instrucción puede ser una declaración, una función o algo que se ejecute
instruccion
    : declaracion
    | funcion
    | ejecucion
    | impresion
    | retorno
    ;
declaracion: 'var' ID ( '=' valor )? ';' ;
funcion: 'funcion' ID '(' argumentos? ')' '{' (instruccion)+ '}' ;
argumentos: ID ( ',' ID )* ;
// Ejecución ahora maneja asignaciones y llamadas
ejecucion
    : operacion_texto
    | concatenar
    | llamada_funcion ';' 
    ;
llamada_funcion: ID '(' lista_valores? ')' ;
lista_valores: valor ( ',' valor )* ;
operacion_texto: ID '=' transformacion '(' cadena ')' ';' ;
transformacion: 'mayusculas' | 'minusculas' | 'longitud' | 'invertir' | 'reemplazar' ;
concatenar: ID '=' cadena '+' cadena ';' ;
impresion: 'imprimir' '(' valor ')' ';' ;
retorno: 'devolver' valor ';' ;
valor: TEXTO | NUMERO | ID ;
cadena: TEXTO | ID ;
//REGLAS DEL LÉXICO
ID: [a-zA-Z_][a-zA-Z0-9_]* ;
NUMERO: [0-9]+ ;
TEXTO: '\'' ( ~['\r\n] )* '\'' ; // Mejora para aceptar cualquier cosa entre comillas
WS: [ \t\r\n]+ -> skip ;