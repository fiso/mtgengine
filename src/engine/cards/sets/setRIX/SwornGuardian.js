"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwornGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Sworn Guardian", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SwornGuardian;
