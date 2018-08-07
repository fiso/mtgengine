"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreyaEtheriumShaper extends UnimplementedCard {
  constructor (game) {
    super(game, "Breya, Etherium Shaper", "You Make the Cube", "PZ2");
  }
}

module.exports = BreyaEtheriumShaper;
