"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Specter", "Mirage", "MIR");
  }
}

module.exports = TaintedSpecter;
