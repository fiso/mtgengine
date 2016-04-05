"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredPlains extends UnimplementedCard {
  constructor(game) {
    super(game, "Snow-Covered Plains", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredPlains;
