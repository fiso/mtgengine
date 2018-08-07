"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skeleton extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeleton", "Masters 25 Tokens", "TA25");
  }
}

module.exports = Skeleton;
