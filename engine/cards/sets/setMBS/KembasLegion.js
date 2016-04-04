"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KembasLegion extends Card {
  constructor(game) {
    super(game, "Kemba's Legion", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KembasLegion;
