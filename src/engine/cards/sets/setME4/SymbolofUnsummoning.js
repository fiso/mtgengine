"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbolofUnsummoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Symbol of Unsummoning", "Masters Edition IV", "ME4");
  }
}

module.exports = SymbolofUnsummoning;
