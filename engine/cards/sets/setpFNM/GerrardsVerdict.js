"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GerrardsVerdictBase = require("../setAPC/GerrardsVerdict.js");

class GerrardsVerdict extends GerrardsVerdictBase {
  constructor(game) {
    super(game, "Gerrard's Verdict", "Friday Night Magic", "pFNM");
  }
}

module.exports = GerrardsVerdict;
