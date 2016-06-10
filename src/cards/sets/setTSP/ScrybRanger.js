"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrybRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Scryb Ranger", "Time Spiral", "TSP");
  }
}

module.exports = ScrybRanger;
