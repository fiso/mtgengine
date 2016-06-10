"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChronatogTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Chronatog Totem", "Time Spiral", "TSP");
  }
}

module.exports = ChronatogTotem;
