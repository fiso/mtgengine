"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredIsland extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow-Covered Island", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredIsland;
