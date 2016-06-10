"use strict";
const Constants = require ("../../../Constants");
const CrushUnderfootBase = require("../setLRW/CrushUnderfoot");

class CrushUnderfoot extends CrushUnderfootBase {
  constructor (game) {
    super(game, "Crush Underfoot", "Modern Masters", "MMA");
  }
}

module.exports = CrushUnderfoot;
