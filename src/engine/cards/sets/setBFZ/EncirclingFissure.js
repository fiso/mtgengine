"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EncirclingFissure extends UnimplementedCard {
  constructor (game) {
    super(game, "Encircling Fissure", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EncirclingFissure;
