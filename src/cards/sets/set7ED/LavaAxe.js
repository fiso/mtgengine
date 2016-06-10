"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor (game) {
    super(game, "Lava Axe", "Seventh Edition", "7ED");
  }
}

module.exports = LavaAxe;
