
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_alice}","click",function(sym,e){var aliceObj=sym.getSymbol("alice");var state=aliceObj.getVariable("state");if(state==="picture"){aliceObj.play("enter");}else if(state==="card"){aliceObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_martin}","click",function(sym,e){var martinObj=sym.getSymbol("martin");var state=martinObj.getVariable("state");if(state==="picture"){martinObj.play("enter");}else if(state==="card"){martinObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_dave}","click",function(sym,e){var daveObj=sym.getSymbol("dave");var state=daveObj.getVariable("state");if(state==="picture"){daveObj.play("enter");}else if(state==="card"){daveObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_terry}","click",function(sym,e){var terryObj=sym.getSymbol("terry");var state=terryObj.getVariable("state");if(state==="picture"){terryObj.play("enter");}else if(state==="card"){terryObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_matt}","click",function(sym,e){var mattObj=sym.getSymbol("matt");var state=mattObj.getVariable("state");if(state==="picture"){mattObj.play("enter");}else if(state==="card"){mattObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ruth}","click",function(sym,e){var ruthObj=sym.getSymbol("ruth");var state=ruthObj.getVariable("state");if(state==="picture"){ruthObj.play("enter");}else if(state==="card"){ruthObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hannah}","click",function(sym,e){var hannahObj=sym.getSymbol("hannah");var state=hannahObj.getVariable("state");if(state==="picture"){hannahObj.play("enter");}else if(state==="card"){hannahObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mark}","click",function(sym,e){var markObj=sym.getSymbol("mark");var state=markObj.getVariable("state");if(state==="picture"){markObj.play("enter");}else if(state==="card"){markObj.play("exit");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_harry}","click",function(sym,e){var harryObj=sym.getSymbol("harry");var state=harryObj.getVariable("state");if(state==="picture"){harryObj.play("enter");}else if(state==="card"){harryObj.play("exit");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'alice'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("alice");
//Edge symbol end:'alice'

//=========================================================

//Edge symbol: 'alice_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("dave");
//Edge symbol end:'dave'

//=========================================================

//Edge symbol: 'dave_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("martin");
//Edge symbol end:'martin'

//=========================================================

//Edge symbol: 'martin_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("terry");
//Edge symbol end:'terry'

//=========================================================

//Edge symbol: 'terry_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("matt");
//Edge symbol end:'matt'

//=========================================================

//Edge symbol: 'terry_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("ruth");
//Edge symbol end:'ruth'

//=========================================================

//Edge symbol: 'terry_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("hannah");
//Edge symbol end:'hannah'

//=========================================================

//Edge symbol: 'terry_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("mark");
//Edge symbol end:'mark'

//=========================================================

//Edge symbol: 'terry_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.setVariable("state","card");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.setVariable("state","trans");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.setVariable("state","picture");sym.stop();});
//Edge binding end
})("harry");
//Edge symbol end:'harry'
})(jQuery,AdobeEdge,"EDGE-516593739");