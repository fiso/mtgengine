"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottingGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Rotting Giant", "Odyssey", "ODY");
  }
}

module.exports = RottingGiant;
