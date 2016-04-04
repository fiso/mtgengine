"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrossHarvester extends Card {
  constructor(game) {
    super(game, "Dross Harvester", "Mirrodin", "MRD");
  }
}

module.exports = DrossHarvester;
