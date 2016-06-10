"use strict";
const Constants = require ("../../../Constants");
const WoodElvesBase = require("../setC14/WoodElves");

class WoodElves extends WoodElvesBase {
  constructor (game) {
    super(game, "Wood Elves", "Exodus", "EXO");
  }
}

module.exports = WoodElves;
