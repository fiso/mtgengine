"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionCall extends UnimplementedCard {
  constructor(game) {
    super(game, "Carrion Call", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CarrionCall;
