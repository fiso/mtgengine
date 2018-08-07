"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DryadMilitant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dryad Militant", "Return to Ravnica", "RTR");
  }
}

module.exports = DryadMilitant;
