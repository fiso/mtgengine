"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredMesa extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Mesa", "Anthologies", "ATH");
  }
}

module.exports = SacredMesa;
