"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SedgeTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Sedge Troll", "Masters Edition IV", "ME4");
  }
}

module.exports = SedgeTroll;
