"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Life Matrix", "Legends", "LEG");
  }
}

module.exports = LifeMatrix;
