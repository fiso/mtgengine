"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloakandDagger extends Card {
  constructor(game) {
    super(game, "Cloak and Dagger", "Morningtide", "MOR");
  }
}

module.exports = CloakandDagger;
