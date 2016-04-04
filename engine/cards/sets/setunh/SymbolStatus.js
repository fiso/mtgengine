"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SymbolStatus extends Card {
  constructor(game) {
    super(game, "Symbol Status", "Unhinged", "UNH");
  }
}

module.exports = SymbolStatus;
