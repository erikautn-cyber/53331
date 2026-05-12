// Generated from c:/Users/DELL/Documents/Universidad/2 año/Sintaxis y Semántica/Programación/analizador/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,21,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,1,1,1,1,3,1,
41,8,1,1,2,1,2,1,2,1,2,3,2,47,8,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,55,8,3,1,3,
1,3,1,3,4,3,60,8,3,11,3,12,3,61,1,3,1,3,1,4,1,4,1,4,5,4,69,8,4,10,4,12,4,
72,9,4,1,5,1,5,1,5,1,5,1,5,3,5,79,8,5,1,6,1,6,1,6,3,6,84,8,6,1,6,1,6,1,7,
1,7,1,7,5,7,91,8,7,10,7,12,7,94,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,
1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,
1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,0,3,1,0,10,14,1,0,18,20,2,0,18,18,20,20,124,0,31,1,0,0,0,
2,40,1,0,0,0,4,42,1,0,0,0,6,50,1,0,0,0,8,65,1,0,0,0,10,78,1,0,0,0,12,80,
1,0,0,0,14,87,1,0,0,0,16,95,1,0,0,0,18,103,1,0,0,0,20,105,1,0,0,0,22,112,
1,0,0,0,24,118,1,0,0,0,26,122,1,0,0,0,28,124,1,0,0,0,30,32,3,2,1,0,31,30,
1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,1,1,0,0,0,35,41,3,4,
2,0,36,41,3,6,3,0,37,41,3,10,5,0,38,41,3,22,11,0,39,41,3,24,12,0,40,35,1,
0,0,0,40,36,1,0,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,3,1,0,0,
0,42,43,5,1,0,0,43,46,5,18,0,0,44,45,5,2,0,0,45,47,3,26,13,0,46,44,1,0,0,
0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,3,0,0,49,5,1,0,0,0,50,51,5,4,0,0,51,
52,5,18,0,0,52,54,5,5,0,0,53,55,3,8,4,0,54,53,1,0,0,0,54,55,1,0,0,0,55,56,
1,0,0,0,56,57,5,6,0,0,57,59,5,7,0,0,58,60,3,2,1,0,59,58,1,0,0,0,60,61,1,
0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,8,0,0,64,7,1,0,0,
0,65,70,5,18,0,0,66,67,5,9,0,0,67,69,5,18,0,0,68,66,1,0,0,0,69,72,1,0,0,
0,70,68,1,0,0,0,70,71,1,0,0,0,71,9,1,0,0,0,72,70,1,0,0,0,73,79,3,16,8,0,
74,79,3,20,10,0,75,76,3,12,6,0,76,77,5,3,0,0,77,79,1,0,0,0,78,73,1,0,0,0,
78,74,1,0,0,0,78,75,1,0,0,0,79,11,1,0,0,0,80,81,5,18,0,0,81,83,5,5,0,0,82,
84,3,14,7,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,86,5,6,0,0,86,13,
1,0,0,0,87,92,3,26,13,0,88,89,5,9,0,0,89,91,3,26,13,0,90,88,1,0,0,0,91,94,
1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,15,1,0,0,0,94,92,1,0,0,0,95,96,5,
18,0,0,96,97,5,2,0,0,97,98,3,18,9,0,98,99,5,5,0,0,99,100,3,28,14,0,100,101,
5,6,0,0,101,102,5,3,0,0,102,17,1,0,0,0,103,104,7,0,0,0,104,19,1,0,0,0,105,
106,5,18,0,0,106,107,5,2,0,0,107,108,3,28,14,0,108,109,5,15,0,0,109,110,
3,28,14,0,110,111,5,3,0,0,111,21,1,0,0,0,112,113,5,16,0,0,113,114,5,5,0,
0,114,115,3,26,13,0,115,116,5,6,0,0,116,117,5,3,0,0,117,23,1,0,0,0,118,119,
5,17,0,0,119,120,3,26,13,0,120,121,5,3,0,0,121,25,1,0,0,0,122,123,7,1,0,
0,123,27,1,0,0,0,124,125,7,2,0,0,125,29,1,0,0,0,9,33,40,46,54,61,70,78,83,
92];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'var'", "'='", "';'", "'funcion'", "'('", 
                            "')'", "'{'", "'}'", "','", "'mayusculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'+'", "'imprimir'", "'devolver'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ID", "NUMERO", "TEXTO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "declaracion", "funcion", 
                         "argumentos", "ejecucion", "llamada_funcion", "lista_valores", 
                         "operacion_texto", "transformacion", "concatenar", 
                         "impresion", "retorno", "valor", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.instruccion();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458770) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_instruccion);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.declaracion();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.funcion();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.ejecucion();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.impresion();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 39;
	            this.retorno();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(analizadorParser.T__0);
	        this.state = 43;
	        this.match(analizadorParser.ID);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 44;
	            this.match(analizadorParser.T__1);
	            this.state = 45;
	            this.valor();
	        }

	        this.state = 48;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(analizadorParser.T__3);
	        this.state = 51;
	        this.match(analizadorParser.ID);
	        this.state = 52;
	        this.match(analizadorParser.T__4);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 53;
	            this.argumentos();
	        }

	        this.state = 56;
	        this.match(analizadorParser.T__5);
	        this.state = 57;
	        this.match(analizadorParser.T__6);
	        this.state = 59; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
	            this.instruccion();
	            this.state = 61; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458770) !== 0));
	        this.state = 63;
	        this.match(analizadorParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(analizadorParser.ID);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 66;
	            this.match(analizadorParser.T__8);
	            this.state = 67;
	            this.match(analizadorParser.ID);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_ejecucion);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.operacion_texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.concatenar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.llamada_funcion();
	            this.state = 76;
	            this.match(analizadorParser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	llamada_funcion() {
	    let localctx = new Llamada_funcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_llamada_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(analizadorParser.ID);
	        this.state = 81;
	        this.match(analizadorParser.T__4);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0)) {
	            this.state = 82;
	            this.lista_valores();
	        }

	        this.state = 85;
	        this.match(analizadorParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_valores() {
	    let localctx = new Lista_valoresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_lista_valores);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.valor();
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 88;
	            this.match(analizadorParser.T__8);
	            this.state = 89;
	            this.valor();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(analizadorParser.ID);
	        this.state = 96;
	        this.match(analizadorParser.T__1);
	        this.state = 97;
	        this.transformacion();
	        this.state = 98;
	        this.match(analizadorParser.T__4);
	        this.state = 99;
	        this.cadena();
	        this.state = 100;
	        this.match(analizadorParser.T__5);
	        this.state = 101;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31744) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, analizadorParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(analizadorParser.ID);
	        this.state = 106;
	        this.match(analizadorParser.T__1);
	        this.state = 107;
	        this.cadena();
	        this.state = 108;
	        this.match(analizadorParser.T__14);
	        this.state = 109;
	        this.cadena();
	        this.state = 110;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, analizadorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(analizadorParser.T__15);
	        this.state = 113;
	        this.match(analizadorParser.T__4);
	        this.state = 114;
	        this.valor();
	        this.state = 115;
	        this.match(analizadorParser.T__5);
	        this.state = 116;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, analizadorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(analizadorParser.T__16);
	        this.state = 119;
	        this.valor();
	        this.state = 120;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, analizadorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, analizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.T__0 = 1;
analizadorParser.T__1 = 2;
analizadorParser.T__2 = 3;
analizadorParser.T__3 = 4;
analizadorParser.T__4 = 5;
analizadorParser.T__5 = 6;
analizadorParser.T__6 = 7;
analizadorParser.T__7 = 8;
analizadorParser.T__8 = 9;
analizadorParser.T__9 = 10;
analizadorParser.T__10 = 11;
analizadorParser.T__11 = 12;
analizadorParser.T__12 = 13;
analizadorParser.T__13 = 14;
analizadorParser.T__14 = 15;
analizadorParser.T__15 = 16;
analizadorParser.T__16 = 17;
analizadorParser.ID = 18;
analizadorParser.NUMERO = 19;
analizadorParser.TEXTO = 20;
analizadorParser.WS = 21;

analizadorParser.RULE_programa = 0;
analizadorParser.RULE_instruccion = 1;
analizadorParser.RULE_declaracion = 2;
analizadorParser.RULE_funcion = 3;
analizadorParser.RULE_argumentos = 4;
analizadorParser.RULE_ejecucion = 5;
analizadorParser.RULE_llamada_funcion = 6;
analizadorParser.RULE_lista_valores = 7;
analizadorParser.RULE_operacion_texto = 8;
analizadorParser.RULE_transformacion = 9;
analizadorParser.RULE_concatenar = 10;
analizadorParser.RULE_impresion = 11;
analizadorParser.RULE_retorno = 12;
analizadorParser.RULE_valor = 13;
analizadorParser.RULE_cadena = 14;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_instruccion;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	funcion() {
	    return this.getTypedRuleContext(FuncionContext,0);
	};

	ejecucion() {
	    return this.getTypedRuleContext(EjecucionContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_declaracion;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_funcion;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_argumentos;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.ID);
	    } else {
	        return this.getToken(analizadorParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_ejecucion;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	llamada_funcion() {
	    return this.getTypedRuleContext(Llamada_funcionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Llamada_funcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_llamada_funcion;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	lista_valores() {
	    return this.getTypedRuleContext(Lista_valoresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterLlamada_funcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitLlamada_funcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitLlamada_funcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Lista_valoresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_lista_valores;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterLista_valores(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitLista_valores(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitLista_valores(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_operacion_texto;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_transformacion;
    }


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_concatenar;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_impresion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_retorno;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(analizadorParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(analizadorParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(analizadorParser.TEXTO, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgramaContext = ProgramaContext; 
analizadorParser.InstruccionContext = InstruccionContext; 
analizadorParser.DeclaracionContext = DeclaracionContext; 
analizadorParser.FuncionContext = FuncionContext; 
analizadorParser.ArgumentosContext = ArgumentosContext; 
analizadorParser.EjecucionContext = EjecucionContext; 
analizadorParser.Llamada_funcionContext = Llamada_funcionContext; 
analizadorParser.Lista_valoresContext = Lista_valoresContext; 
analizadorParser.Operacion_textoContext = Operacion_textoContext; 
analizadorParser.TransformacionContext = TransformacionContext; 
analizadorParser.ConcatenarContext = ConcatenarContext; 
analizadorParser.ImpresionContext = ImpresionContext; 
analizadorParser.RetornoContext = RetornoContext; 
analizadorParser.ValorContext = ValorContext; 
analizadorParser.CadenaContext = CadenaContext; 
