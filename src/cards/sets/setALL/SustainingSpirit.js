"use strict";
const Constants = require ("../../../Constants");
const SustainingSpiritBase = require("../setME2/SustainingSpirit");

class SustainingSpirit extends SustainingSpiritBase {
  constructor (game) {
    super(game, "Sustaining Spirit", "Alliances", "ALL");
  }
}

module.exports = SustainingSpirit;
