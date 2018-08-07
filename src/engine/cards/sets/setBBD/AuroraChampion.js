"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuroraChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Aurora Champion", "Battlebond", "BBD");
  }
}

module.exports = AuroraChampion;
