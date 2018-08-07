"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionScreecher extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Screecher", "Hour of Devastation", "HOU");
  }
}

module.exports = CarrionScreecher;
