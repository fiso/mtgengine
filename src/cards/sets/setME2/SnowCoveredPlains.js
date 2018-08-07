"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredPlains extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow-Covered Plains", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredPlains;
