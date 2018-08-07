"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Hallowed Ground", "Masters Edition", "MED");
  }
}

module.exports = HallowedGround;
