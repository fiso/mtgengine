"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SustainingSpirit extends Card {
  constructor(game) {
    super(game, "Sustaining Spirit", "Alliances", "ALL");
  }
}

module.exports = SustainingSpirit;
