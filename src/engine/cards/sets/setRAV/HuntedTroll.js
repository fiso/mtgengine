"use strict";
const Constants = require ("../../../Constants");
const HuntedTrollBase = require("../setC13/HuntedTroll");

class HuntedTroll extends HuntedTrollBase {
  constructor (game) {
    super(game, "Hunted Troll", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedTroll;
