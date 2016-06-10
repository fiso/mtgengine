"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatOakGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Great Oak Guardian", "Commander 2015", "C15");
  }
}

module.exports = GreatOakGuardian;
