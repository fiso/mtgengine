"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcornHarvest extends Card {
  constructor(game) {
    super(game, "Acorn Harvest", "Torment", "TOR");
  }
}

module.exports = AcornHarvest;
