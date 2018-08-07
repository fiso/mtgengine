"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TruthorTale extends UnimplementedCard {
  constructor (game) {
    super(game, "Truth or Tale", "Time Spiral", "TSP");
  }
}

module.exports = TruthorTale;
