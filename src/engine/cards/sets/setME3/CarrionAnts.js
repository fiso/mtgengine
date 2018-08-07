"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionAnts extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Ants", "Masters Edition III", "ME3");
  }
}

module.exports = CarrionAnts;
