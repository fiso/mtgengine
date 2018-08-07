"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishSquatters extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Squatters", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishSquatters;
