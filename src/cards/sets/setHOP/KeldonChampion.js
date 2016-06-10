"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Champion", "Planechase", "HOP");
  }
}

module.exports = KeldonChampion;
