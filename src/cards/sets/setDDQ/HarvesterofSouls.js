"use strict";
const Constants = require ("../../../Constants");
const HarvesterofSoulsBase = require("../setAVR/HarvesterofSouls");

class HarvesterofSouls extends HarvesterofSoulsBase {
  constructor (game) {
    super(game, "Harvester of Souls", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = HarvesterofSouls;
