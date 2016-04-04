"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosMastiff extends UnimplementedCard {
  constructor(game) {
    super(game, "Boros Mastiff", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosMastiff;
