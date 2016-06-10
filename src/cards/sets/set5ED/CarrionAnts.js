"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionAnts extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Ants", "Fifth Edition", "5ED");
  }
}

module.exports = CarrionAnts;
