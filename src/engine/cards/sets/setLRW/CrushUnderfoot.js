"use strict";
const Constants = require ("../../../Constants");
const CrushUnderfootBase = require("../setMMA/CrushUnderfoot");

class CrushUnderfoot extends CrushUnderfootBase {
  constructor (game) {
    super(game, "Crush Underfoot", "Lorwyn", "LRW");
  }
}

module.exports = CrushUnderfoot;
