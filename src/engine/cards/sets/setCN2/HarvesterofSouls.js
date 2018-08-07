"use strict";
const Constants = require ("../../../Constants");
const HarvesterofSoulsBase = require("../setE01/HarvesterofSouls");

class HarvesterofSouls extends HarvesterofSoulsBase {
  constructor (game) {
    super(game, "Harvester of Souls", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HarvesterofSouls;
