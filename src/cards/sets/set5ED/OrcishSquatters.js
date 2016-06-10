"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishSquatters extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Squatters", "Fifth Edition", "5ED");
  }
}

module.exports = OrcishSquatters;
