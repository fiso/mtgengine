"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Drake", "Vintage Masters", "VMA");
  }
}

module.exports = SeaDrake;
