"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Greenseeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Greenseeker", "Time Spiral", "TSP");
  }
}

module.exports = Greenseeker;
