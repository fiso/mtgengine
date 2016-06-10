"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wildfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildfire", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Wildfire;
