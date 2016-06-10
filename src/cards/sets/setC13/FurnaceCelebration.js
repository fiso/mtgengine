"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceCelebration extends UnimplementedCard {
  constructor (game) {
    super(game, "Furnace Celebration", "Commander 2013 Edition", "C13");
  }
}

module.exports = FurnaceCelebration;
