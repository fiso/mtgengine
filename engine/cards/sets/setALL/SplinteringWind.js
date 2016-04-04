"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SplinteringWind extends Card {
  constructor(game) {
    super(game, "Splintering Wind", "Alliances", "ALL");
  }
}

module.exports = SplinteringWind;
