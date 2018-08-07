"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanyonSlough extends UnimplementedCard {
  constructor (game) {
    super(game, "Canyon Slough", "Amonkhet", "AKH");
  }
}

module.exports = CanyonSlough;
