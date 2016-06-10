"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedHarvester extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupted Harvester", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CorruptedHarvester;
