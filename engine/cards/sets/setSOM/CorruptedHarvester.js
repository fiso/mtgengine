"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptedHarvester extends Card {
  constructor(game) {
    super(game, "Corrupted Harvester", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CorruptedHarvester;
