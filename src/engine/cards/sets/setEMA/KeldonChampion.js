"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Champion", "Eternal Masters", "EMA");
  }
}

module.exports = KeldonChampion;
