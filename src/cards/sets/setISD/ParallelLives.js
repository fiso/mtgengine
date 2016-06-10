"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallelLives extends UnimplementedCard {
  constructor (game) {
    super(game, "Parallel Lives", "Innistrad", "ISD");
  }
}

module.exports = ParallelLives;
