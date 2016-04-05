"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredSwamp extends UnimplementedCard {
  constructor(game) {
    super(game, "Snow-Covered Swamp", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredSwamp;
