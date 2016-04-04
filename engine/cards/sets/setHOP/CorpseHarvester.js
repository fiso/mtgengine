"use strict";
const Constants = require ("../../../Constants");
const CorpseHarvesterBase = require("../setLGN/CorpseHarvester");

class CorpseHarvester extends CorpseHarvesterBase {
  constructor(game) {
    super(game, "Corpse Harvester", "Planechase", "HOP");
  }
}

module.exports = CorpseHarvester;
