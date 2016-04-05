"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor(game) {
    super(game, "Lava Axe", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LavaAxe;
