"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpseHarvesterBase = require("../setLGN/CorpseHarvester.js");

class CorpseHarvester extends CorpseHarvesterBase {
  constructor(game) {
    super(game, "Corpse Harvester", "Planechase", "HOP");
  }
}

module.exports = CorpseHarvester;
