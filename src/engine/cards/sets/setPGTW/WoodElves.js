"use strict";
const Constants = require ("../../../Constants");
const WoodElvesBase = require("../setCMA/WoodElves");

class WoodElves extends WoodElvesBase {
  constructor (game) {
    super(game, "Wood Elves", "Gateway 2006", "PGTW");
  }
}

module.exports = WoodElves;
