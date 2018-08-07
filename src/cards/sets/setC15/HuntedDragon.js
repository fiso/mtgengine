"use strict";
const Constants = require ("../../../Constants");
const HuntedDragonBase = require("../setCM2/HuntedDragon");

class HuntedDragon extends HuntedDragonBase {
  constructor (game) {
    super(game, "Hunted Dragon", "Commander 2015", "C15");
  }
}

module.exports = HuntedDragon;
