"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Steel Overseer", "Kaladesh Inventions", "MPS");
  }
}

module.exports = SteelOverseer;
