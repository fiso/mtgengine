"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedCrusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Crusher", "Battlebond", "BBD");
  }
}

module.exports = PlatedCrusher;
