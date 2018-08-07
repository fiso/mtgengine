"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloakandDagger extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloak and Dagger", "Morningtide", "MOR");
  }
}

module.exports = CloakandDagger;
