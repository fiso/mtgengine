"use strict";
const Constants = require ("../../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe");

class LavaAxe extends LavaAxeBase {
  constructor(game) {
    super(game, "Lava Axe", "Portal", "POR");
  }
}

module.exports = LavaAxe;
