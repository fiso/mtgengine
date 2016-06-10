"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperGnomes extends UnimplementedCard {
  constructor (game) {
    super(game, "Copper Gnomes", "Urza's Saga", "USG");
  }
}

module.exports = CopperGnomes;
