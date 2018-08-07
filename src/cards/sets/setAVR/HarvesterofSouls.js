"use strict";
const Constants = require ("../../../Constants");
const HarvesterofSoulsBase = require("../setE01/HarvesterofSouls");

class HarvesterofSouls extends HarvesterofSoulsBase {
  constructor (game) {
    super(game, "Harvester of Souls", "Avacyn Restored", "AVR");
  }
}

module.exports = HarvesterofSouls;
