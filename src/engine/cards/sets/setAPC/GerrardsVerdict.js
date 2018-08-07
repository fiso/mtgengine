"use strict";
const Constants = require ("../../../Constants");
const GerrardsVerdictBase = require("../setF07/GerrardsVerdict");

class GerrardsVerdict extends GerrardsVerdictBase {
  constructor (game) {
    super(game, "Gerrard's Verdict", "Apocalypse", "APC");
  }
}

module.exports = GerrardsVerdict;
