"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolemnSimulacrum extends UnimplementedCard {
  constructor (game) {
    super(game, "Solemn Simulacrum", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SolemnSimulacrum;
