"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Evangelize extends UnimplementedCard {
  constructor (game) {
    super(game, "Evangelize", "Time Spiral", "TSP");
  }
}

module.exports = Evangelize;
