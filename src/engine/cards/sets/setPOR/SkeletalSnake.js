"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalSnake extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeletal Snake", "Portal", "POR");
  }
}

module.exports = SkeletalSnake;
