"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnyaroBees extends UnimplementedCard {
  constructor (game) {
    super(game, "Unyaro Bees", "Time Spiral", "TSP");
  }
}

module.exports = UnyaroBees;
