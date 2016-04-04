"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OozeGarden extends Card {
  constructor(game) {
    super(game, "Ooze Garden", "Shards of Alara", "ALA");
  }
}

module.exports = OozeGarden;
