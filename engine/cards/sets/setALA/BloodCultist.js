"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodCultist extends Card {
  constructor(game) {
    super(game, "Blood Cultist", "Shards of Alara", "ALA");
  }
}

module.exports = BloodCultist;
