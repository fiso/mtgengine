"use strict";
const Constants = require ("../../../Constants");
const NocturnalRaidBase = require("../setPHUK/NocturnalRaid");

class NocturnalRaid extends NocturnalRaidBase {
  constructor (game) {
    super(game, "Nocturnal Raid", "Seventh Edition", "7ED");
  }
}

module.exports = NocturnalRaid;
