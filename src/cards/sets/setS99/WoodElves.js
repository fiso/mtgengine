"use strict";
const Constants = require ("../../../Constants");
const WoodElvesBase = require("../setC14/WoodElves");

class WoodElves extends WoodElvesBase {
  constructor (game) {
    super(game, "Wood Elves", "Starter 1999", "S99");
  }
}

module.exports = WoodElves;
