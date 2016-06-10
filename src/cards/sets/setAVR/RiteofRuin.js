"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiteofRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Rite of Ruin", "Avacyn Restored", "AVR");
  }
}

module.exports = RiteofRuin;
