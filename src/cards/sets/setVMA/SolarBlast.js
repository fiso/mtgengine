"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolarBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Solar Blast", "Vintage Masters", "VMA");
  }
}

module.exports = SolarBlast;
