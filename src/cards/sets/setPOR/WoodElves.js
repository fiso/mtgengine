"use strict";
const Constants = require ("../../../Constants");
const WoodElvesBase = require("../setCMA/WoodElves");

class WoodElves extends WoodElvesBase {
  constructor (game) {
    super(game, "Wood Elves", "Portal", "POR");
  }
}

module.exports = WoodElves;
