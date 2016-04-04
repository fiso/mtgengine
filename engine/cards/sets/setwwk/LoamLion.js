"use strict";
const Constants = require ("../../../Constants");
const LoamLionBase = require("../setDDH/LoamLion");

class LoamLion extends LoamLionBase {
  constructor(game) {
    super(game, "Loam Lion", "Worldwake", "WWK");
  }
}

module.exports = LoamLion;
