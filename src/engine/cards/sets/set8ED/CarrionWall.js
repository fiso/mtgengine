"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Wall", "Eighth Edition", "8ED");
  }
}

module.exports = CarrionWall;
