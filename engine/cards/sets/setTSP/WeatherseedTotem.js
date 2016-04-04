"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeatherseedTotem extends Card {
  constructor(game) {
    super(game, "Weatherseed Totem", "Time Spiral", "TSP");
  }
}

module.exports = WeatherseedTotem;
