"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindingCanyons extends Card {
  constructor(game) {
    super(game, "Winding Canyons", "Weatherlight", "WTH");
  }
}

module.exports = WindingCanyons;
