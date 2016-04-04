"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetallicMastery extends Card {
  constructor(game) {
    super(game, "Metallic Mastery", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MetallicMastery;
