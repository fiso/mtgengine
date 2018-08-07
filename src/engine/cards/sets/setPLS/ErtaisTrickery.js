"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErtaisTrickery extends UnimplementedCard {
  constructor (game) {
    super(game, "Ertai's Trickery", "Planeshift", "PLS");
  }
}

module.exports = ErtaisTrickery;
