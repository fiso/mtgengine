"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor(game) {
    super(game, "Lava Axe", "Eighth Edition", "8ED");
  }
}

module.exports = LavaAxe;
