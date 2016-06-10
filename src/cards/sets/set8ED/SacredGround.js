"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Ground", "Eighth Edition", "8ED");
  }
}

module.exports = SacredGround;
