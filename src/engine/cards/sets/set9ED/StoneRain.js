"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneRain extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Rain", "Ninth Edition", "9ED");
  }
}

module.exports = StoneRain;
