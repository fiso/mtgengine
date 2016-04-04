"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NocturnalRaidBase = require("../setMIR/NocturnalRaid.js");

class NocturnalRaid extends NocturnalRaidBase {
  constructor(game) {
    super(game, "Nocturnal Raid", "Seventh Edition", "7ED");
  }
}

module.exports = NocturnalRaid;
