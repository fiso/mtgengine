"use strict";
const Constants = require ("../../../Constants");
const GerrardsVerdictBase = require("../setF07/GerrardsVerdict");

class GerrardsVerdict extends GerrardsVerdictBase {
  constructor (game) {
    super(game, "Gerrard's Verdict", "Magic Online Promos", "PRM");
  }
}

module.exports = GerrardsVerdict;
