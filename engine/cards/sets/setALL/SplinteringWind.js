"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplinteringWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Splintering Wind", "Alliances", "ALL");
  }
}

module.exports = SplinteringWind;
