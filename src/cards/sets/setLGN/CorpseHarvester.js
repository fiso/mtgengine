"use strict";
const Constants = require ("../../../Constants");
const CorpseHarvesterBase = require("../setHOP/CorpseHarvester");

class CorpseHarvester extends CorpseHarvesterBase {
  constructor (game) {
    super(game, "Corpse Harvester", "Legions", "LGN");
  }
}

module.exports = CorpseHarvester;
