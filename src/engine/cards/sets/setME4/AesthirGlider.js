"use strict";
const Constants = require ("../../../Constants");
const AesthirGliderBase = require("../setDOM/AesthirGlider");

class AesthirGlider extends AesthirGliderBase {
  constructor (game) {
    super(game, "Aesthir Glider", "Masters Edition IV", "ME4");
  }
}

module.exports = AesthirGlider;
