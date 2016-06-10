"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor (game) {
    super(game, "Lava Axe", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LavaAxe;
