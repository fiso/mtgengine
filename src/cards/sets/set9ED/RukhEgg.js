"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RukhEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Rukh Egg", "Ninth Edition", "9ED");
  }
}

module.exports = RukhEgg;
