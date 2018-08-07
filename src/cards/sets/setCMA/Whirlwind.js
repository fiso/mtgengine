"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whirlwind extends UnimplementedCard {
  constructor (game) {
    super(game, "Whirlwind", "Commander Anthology", "CMA");
  }
}

module.exports = Whirlwind;
