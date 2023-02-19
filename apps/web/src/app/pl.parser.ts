/* parser generated by jison 0.3.0 */
/**
 * Returns a Parser implementing JisonParserApi and a Lexer implementing JisonLexerApi.
 */


import { JisonParser, JisonParserApi, StateType, SymbolsType, TerminalsType, ProductionsType, o } from '@ts-jison/parser';const $V0=[1,10],$V1=[1,11],$V2=[1,12],$V3=[1,13],$V4=[1,14],$V5=[1,15],$V6=[5,8,14,32,35,36,38],$V7=[1,29],$V8=[1,30],$V9=[1,31],$Va=[1,32],$Vb=[1,33],$Vc=[15,28],$Vd=[5,8,14,23,26,29,32,35,36,38],$Ve=[1,47],$Vf=[23,29],$Vg=[26,29];

export class PLParser extends JisonParser implements JisonParserApi {
    $?: any;

    constructor (yy = {}, lexer = new PLLexer(yy)) {
      super(yy, lexer);
    }

    symbols_: SymbolsType = {"error":2,"program":3,"statements":4,"EOF":5,"statement":6,"comment":7,"COMMENT":8,"assignment_statement":9,"include_statement":10,"use_statement":11,"copyurl_statement":12,"copycontent_statement":13,"IDENTIFIER":14,"EQUALS":15,"value_multi":16,"COMPONENT":17,"value":18,"NUMBER":19,"BOOLEAN":20,"STRING":21,"LBRACKET":22,"RBRACKET":23,"elements":24,"LBRACE":25,"RBRACE":26,"pairs":27,"ANY":28,"COMMA":29,"pair":30,"COLON":31,"INCLUDE":32,"PATH":33,"AS":34,"USE":35,"COPYURL":36,"INTO":37,"COPYCONTENT":38,"$accept":0,"$end":1};
    terminals_: TerminalsType = {2:"error",5:"EOF",8:"COMMENT",14:"IDENTIFIER",15:"EQUALS",17:"COMPONENT",19:"NUMBER",20:"BOOLEAN",21:"STRING",22:"LBRACKET",23:"RBRACKET",25:"LBRACE",26:"RBRACE",28:"ANY",29:"COMMA",31:"COLON",32:"INCLUDE",33:"PATH",34:"AS",35:"USE",36:"COPYURL",37:"INTO",38:"COPYCONTENT"};
    productions_: ProductionsType = [0,[3,2],[4,1],[4,1],[4,2],[4,2],[7,1],[6,1],[6,1],[6,1],[6,1],[6,1],[9,3],[9,4],[9,3],[9,3],[18,1],[18,1],[18,1],[18,2],[18,3],[18,2],[18,3],[16,2],[16,1],[24,1],[24,3],[27,1],[27,3],[30,3],[10,2],[10,4],[11,4],[12,4],[13,4]];
    table: Array<StateType> = [{3:1,4:2,6:3,7:4,8:$V0,9:5,10:6,11:7,12:8,13:9,14:$V1,32:$V2,35:$V3,36:$V4,38:$V5},{1:[3]},{5:[1,16],6:18,7:17,8:$V0,9:5,10:6,11:7,12:8,13:9,14:$V1,32:$V2,35:$V3,36:$V4,38:$V5},o($V6,[2,2]),o($V6,[2,3]),o($V6,[2,7]),o($V6,[2,8]),o($V6,[2,9]),o($V6,[2,10]),o($V6,[2,11]),o($V6,[2,6]),{15:[1,19],17:[1,20]},{33:[1,21]},{33:[1,22]},{33:[1,23]},{33:[1,24]},{1:[2,1]},o($V6,[2,4]),o($V6,[2,5]),{15:[1,25],16:26,18:27,19:$V7,20:$V8,21:$V9,22:$Va,25:$Vb,28:[1,28]},{14:[1,34]},o($V6,[2,30],{34:[1,35]}),{34:[1,36]},{37:[1,37]},{37:[1,38]},o($V6,[2,12]),{15:[1,39],28:[1,40]},o($V6,[2,15]),o($Vc,[2,24]),o($Vd,[2,16]),o($Vd,[2,17]),o($Vd,[2,18]),{18:43,19:$V7,20:$V8,21:$V9,22:$Va,23:[1,41],24:42,25:$Vb},{14:$Ve,26:[1,44],27:45,30:46},o($V6,[2,14]),{14:[1,48]},{14:[1,49]},{14:[1,50]},{14:[1,51]},o($V6,[2,13]),o($Vc,[2,23]),o($Vd,[2,19]),{23:[1,52],29:[1,53]},o($Vf,[2,25]),o($Vd,[2,21]),{26:[1,54],29:[1,55]},o($Vg,[2,27]),{31:[1,56]},o($V6,[2,31]),o($V6,[2,32]),o($V6,[2,33]),o($V6,[2,34]),o($Vd,[2,20]),{18:57,19:$V7,20:$V8,21:$V9,22:$Va,25:$Vb},o($Vd,[2,22]),{14:$Ve,30:58},{18:59,19:$V7,20:$V8,21:$V9,22:$Va,25:$Vb},o($Vf,[2,26]),o($Vg,[2,28]),o($Vg,[2,29])];
    defaultActions: {[key:number]: any} = {16:[2,1]};

    performAction (yytext:string, yyleng:number, yylineno:number, yy:any, yystate:number /* action[1] */, $$:any /* vstack */, _$:any /* lstack */): any {
/* this == yyval */
          var $0 = $$.length - 1;
        switch (yystate) {
case 1:
 console.log($$[$0-1]); return $$[$0-1]; 
break;
case 2: case 25: case 27:
 this.$ = [$$[$0]]; 
break;
case 3:
 this.$ = [$$[$0]] 
break;
case 4:
 this.$ = $$[$0-1].concat($$[$0]) 
break;
case 5:
 this.$ = $$[$0-1].concat($$[$0]); 
break;
case 6:
 this.$ = { type: 'comment', value: $$[$0], lineno: yylineno + 1 }; 
break;
case 7: case 8: case 9: case 10: case 11:
 this.$ = $$[$0]; 
break;
case 12:
 this.$ = { type: 'assignment', key: $$[$0-2], value: '', lineno: yylineno + 1 }; 
break;
case 13:
 this.$ = { type: 'assignment', key: $$[$0-3], value: $$[$0-1], lineno: yylineno + 1 }; 
break;
case 14:
 this.$ = { type: 'component', key: $$[$0-2], value: $$[$0], lineno: yylineno + 1 }; 
break;
case 15:
 this.$ = { type: 'assignment', key: $$[$0-2], value: $$[$0], lineno: yylineno + 1 }; 
break;
case 16:
 this.$ = { type: 'number', value: Number($$[$0]), lineno: yylineno + 1 }; 
break;
case 17:
 this.$ = { type: 'boolean', value: Boolean($$[$0].toLowerCase()), lineno: yylineno + 1 }; 
break;
case 18:
 this.$ = { type: 'string', value: $$[$0].slice(1, -1), lineno: yylineno + 1 }; 
break;
case 19:
 this.$ = { type: 'array', value: [], lineno: yylineno + 1 }; 
break;
case 20:
 this.$ = { type: 'array', value: $$[$0-1], lineno: yylineno + 1 }; 
break;
case 21:
 this.$ = { type: 'object', value: {}, lineno: yylineno + 1 }; 
break;
case 22:
 this.$ = { type: 'object', value: $$[$0-1], lineno: yylineno + 1 }; 
break;
case 23:
 this.$ = $$[$0-1] + $$[$0] 
break;
case 26: case 28:
 this.$ = $$[$0-2].concat($$[$0]); 
break;
case 29:
 this.$ = { key: $$[$0-2], value: $$[$0] }; 
break;
case 30:
 this.$ = { type: 'include', path: $$[$0], lineno: yylineno + 1 }; 
break;
case 31:
 this.$ = { type: 'include', path: $$[$0-2], name: $$[$0], lineno: yylineno + 1 }; 
break;
case 32:
 this.$ = { type: 'use', path: $$[$0-2], name: $$[$0], lineno: yylineno + 1 }; 
break;
case 33:
 this.$ = { type: 'copyurl', path: $$[$0-2], name: $$[$0], lineno: yylineno + 1 }; 
break;
case 34:
 this.$ = { type: 'copycontent', path: $$[$0-2], name: $$[$0], lineno: yylineno + 1 }; 
break;
        }
    }
}


/* generated by ts-jison-lex 0.3.0 */
import { JisonLexer, JisonLexerApi } from '@ts-jison/lexer';
export class PLLexer extends JisonLexer implements JisonLexerApi {
    options: any = {"moduleName":"PL"};
    constructor (yy = {}) {
        super(yy);
    }

    rules: RegExp[] = [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:\/\*([^*]|\*[^\/])*\*\/)/,/^(?:=:)/,/^(?:==)/,/^(?:=)/,/^(?:@copycontent\b)/,/^(?:@copyurl\b)/,/^(?:@include\b)/,/^(?:@use\b)/,/^(?:as\b)/,/^(?:into\b)/,/^(?:.+::[^\s\n]+)/,/^(?:[+-]?\d+)/,/^(?:[,])/,/^(?:[:])/,/^(?:[\{])/,/^(?:[\}])/,/^(?:[\[])/,/^(?:[\]])/,/^(?:true|false|True|False\b)/,/^(?:[a-zA-Z_](\.?[a-zA-Z0-9_]*))/,/^(?:"([^\\\"]|\\.)*")/,/^(?:$)/,/^(?:\s==)/,/^(?:\s+)/,/^(?:[^\s]*)/];
    conditions: any = {"MULTI":{"rules":[23,24,25,26],"inclusive":true},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true}}
    performAction (yy:any,yy_:any,$avoiding_name_collisions:any,YY_START:any): any {
          var YYSTATE=YY_START;
        switch($avoiding_name_collisions) {
    case 0:/* ignore whitespace */
      break;
    case 1:return 8
      break;
    case 2:return 8
      break;
    case 3:return 17
      break;
    case 4: this.begin('MULTI'); console.log('BEGIN MULTI'); return 15; 
      break;
    case 5:return 15
      break;
    case 6:return 38
      break;
    case 7:return 36
      break;
    case 8:return 32
      break;
    case 9:return 35
      break;
    case 10:return 34
      break;
    case 11:return 37
      break;
    case 12:return 33
      break;
    case 13:return 19
      break;
    case 14:return 29
      break;
    case 15:return 31
      break;
    case 16:return 25
      break;
    case 17:return 26
      break;
    case 18:return 22
      break;
    case 19:return 23
      break;
    case 20:return 20
      break;
    case 21:return 14
      break;
    case 22:return 21
      break;
    case 23:return 5
      break;
    case 24:  this.popState(); return 15 
      break;
    case 25:  return 28 
      break;
    case 26:  return 28 
      break;
        }
    }
}

