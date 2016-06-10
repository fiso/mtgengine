"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor (game) {
    super(game, "Lava Axe", "Magic 2012", "M12");
  }
}

module.exports = LavaAxe;
