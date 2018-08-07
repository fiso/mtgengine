"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunastianFalconer extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunastian Falconer", "Masters Edition III", "ME3");
  }
}

module.exports = SunastianFalconer;
