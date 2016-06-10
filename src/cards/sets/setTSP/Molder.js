"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Molder extends UnimplementedCard {
  constructor (game) {
    super(game, "Molder", "Time Spiral", "TSP");
  }
}

module.exports = Molder;
