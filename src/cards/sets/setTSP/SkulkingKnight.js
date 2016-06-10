"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkulkingKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Skulking Knight", "Time Spiral", "TSP");
  }
}

module.exports = SkulkingKnight;
