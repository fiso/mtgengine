"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Dragon", "Vintage Masters", "VMA");
  }
}

module.exports = EternalDragon;
