"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionCall extends Card {
  constructor(game) {
    super(game, "Carrion Call", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CarrionCall;
