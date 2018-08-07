"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartonStromgald extends UnimplementedCard {
  constructor (game) {
    super(game, "Márton Stromgald", "Masters Edition", "MED");
  }
}

module.exports = MartonStromgald;
