"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DryadMilitant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dryad Militant", "Magic Game Day", "pMGD");
  }
}

module.exports = DryadMilitant;
