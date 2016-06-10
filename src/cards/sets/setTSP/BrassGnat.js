"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrassGnat extends UnimplementedCard {
  constructor (game) {
    super(game, "Brass Gnat", "Time Spiral", "TSP");
  }
}

module.exports = BrassGnat;
