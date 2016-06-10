"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeatherseedTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Weatherseed Totem", "Time Spiral", "TSP");
  }
}

module.exports = WeatherseedTotem;
