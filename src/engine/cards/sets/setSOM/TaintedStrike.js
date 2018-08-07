"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Strike", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TaintedStrike;
