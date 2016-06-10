"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorseshoeCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "Horseshoe Crab", "Tenth Edition", "10E");
  }
}

module.exports = HorseshoeCrab;
