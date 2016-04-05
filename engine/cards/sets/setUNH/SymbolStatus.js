"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbolStatus extends UnimplementedCard {
  constructor(game) {
    super(game, "Symbol Status", "Unhinged", "UNH");
  }
}

module.exports = SymbolStatus;
