"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Greed extends UnimplementedCard {
  constructor (game) {
    super(game, "Greed", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Greed;
