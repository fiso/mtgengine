"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatOakGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Great Oak Guardian", "Commander Anthology", "CMA");
  }
}

module.exports = GreatOakGuardian;
