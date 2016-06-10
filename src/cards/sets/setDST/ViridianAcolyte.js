"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Acolyte", "Darksteel", "DST");
  }
}

module.exports = ViridianAcolyte;
