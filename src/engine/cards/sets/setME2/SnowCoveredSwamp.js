"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredSwamp extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow-Covered Swamp", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredSwamp;
