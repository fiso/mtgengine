"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieTauntings extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Tauntings", "Lorwyn", "LRW");
  }
}

module.exports = FaerieTauntings;
