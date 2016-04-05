"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DolmenGate extends UnimplementedCard {
  constructor(game) {
    super(game, "Dolmen Gate", "Lorwyn", "LRW");
  }
}

module.exports = DolmenGate;
