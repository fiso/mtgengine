"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseHarvester extends Card {
  constructor(game) {
    super(game, "Corpse Harvester", "Legions", "LGN");
  }
}

module.exports = CorpseHarvester;
