"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedRemedy extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Remedy", "Magic Origins", "ORI");
  }
}

module.exports = TaintedRemedy;
