"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionFeeder extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Feeder", "Eternal Masters", "EMA");
  }
}

module.exports = CarrionFeeder;
