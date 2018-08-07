"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Ground", "Ninth Edition", "9ED");
  }
}

module.exports = SacredGround;
