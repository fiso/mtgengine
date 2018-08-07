"use strict";
const Constants = require ("../../../Constants");
const CutRibbonsBase = require("../setAKH/CutRibbons");

class CutRibbons extends CutRibbonsBase {
  constructor (game) {
    super(game, "Cut // Ribbons", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CutRibbons;
