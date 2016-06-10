"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindingCanyons extends UnimplementedCard {
  constructor (game) {
    super(game, "Winding Canyons", "Weatherlight", "WTH");
  }
}

module.exports = WindingCanyons;
