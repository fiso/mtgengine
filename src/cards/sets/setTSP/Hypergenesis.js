"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hypergenesis extends UnimplementedCard {
  constructor (game) {
    super(game, "Hypergenesis", "Time Spiral", "TSP");
  }
}

module.exports = Hypergenesis;
