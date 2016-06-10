"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conflagrate extends UnimplementedCard {
  constructor (game) {
    super(game, "Conflagrate", "Time Spiral", "TSP");
  }
}

module.exports = Conflagrate;
