"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredForest extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow-Covered Forest", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredForest;
