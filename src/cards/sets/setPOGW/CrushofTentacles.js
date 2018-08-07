"use strict";
const Constants = require ("../../../Constants");
const CrushofTentaclesBase = require("../setOGW/CrushofTentacles");

class CrushofTentacles extends CrushofTentaclesBase {
  constructor (game) {
    super(game, "Crush of Tentacles", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = CrushofTentacles;
