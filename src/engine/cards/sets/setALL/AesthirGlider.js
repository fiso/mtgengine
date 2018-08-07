"use strict";
const Constants = require ("../../../Constants");
const AesthirGliderBase = require("../setDOM/AesthirGlider");

class AesthirGlider extends AesthirGliderBase {
  constructor (game) {
    super(game, "Aesthir Glider", "Alliances", "ALL");
  }
}

module.exports = AesthirGlider;
