// Importamos la base generada por ANTLR
import analizadorVisitor from './generated/analizadorVisitor.js';

export default class CustomanalizadorVisitor extends analizadorVisitor {
    constructor() {
        super();
        // Tabla de Símbolos de un simple objeto
        this.tablaSimbolos = {};
    }

    // 1) Visitamos las DECLARACIONES
    visitDeclaracion(ctx) {
        const nombreVar = ctx.ID().getText();
        if (this.tablaSimbolos[nombreVar]) {
            console.error(`ERROR SEMÁNTICO: La variable '${nombreVar}' ya fue declarada.`);
        } else {
            this.tablaSimbolos[nombreVar] = { tipo: 'Variable' };
            console.log(`Variable registrada: ${nombreVar}`);
        }
        return this.visitChildren(ctx);
    }

    // 2) Visitamos las IMPRESIONES
    visitImpresion(ctx) {
        // Acceder a la regla 'valor' y ver si tiene un ID
        if (ctx.valor().ID()) {
            const nombreVar = ctx.valor().ID().getText();
            if (!this.tablaSimbolos[nombreVar]) {
                console.error(`ERROR SEMÁNTICO: Intentando imprimir '${nombreVar}' pero no existe.`);
            }
        }
        return this.visitChildren(ctx);
    }

    // 3) Visitar TRANSFORMACIONES (ej. mayusculas)
    visitOperacion_texto(ctx) {
        const transformacion = ctx.transformacion().getText();
        const cadenaCtx = ctx.cadena();
        // Si lo que se quiere transformar es una variable (ID)
        if (cadenaCtx.ID()) {
            const nombreVar = cadenaCtx.ID().getText();
            if (!this.tablaSimbolos[nombreVar]) {
                console.error(`ERROR SEMÁNTICO: Variable '${nombreVar}' no definida para usar en ${transformacion}.`);
            }
        }
        return this.visitChildren(ctx);
    }
}
