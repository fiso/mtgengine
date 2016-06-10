"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor (game) {
    super(game, "Lava Axe", "Magic 2011", "M11");
  }
}

module.exports = LavaAxe;
