"use strict";
const Constants = require ("../../../Constants");
const HuntedDragonBase = require("../setC15/HuntedDragon");

class HuntedDragon extends HuntedDragonBase {
  constructor(game) {
    super(game, "Hunted Dragon", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedDragon;
