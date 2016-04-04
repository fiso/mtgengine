"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SustainingSpiritBase = require("../setALL/SustainingSpirit.js");

class SustainingSpirit extends SustainingSpiritBase {
  constructor(game) {
    super(game, "Sustaining Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = SustainingSpirit;
