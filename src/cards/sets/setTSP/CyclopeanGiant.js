"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopeanGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclopean Giant", "Time Spiral", "TSP");
  }
}

module.exports = CyclopeanGiant;
