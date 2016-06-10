"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolarBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Solar Blast", "Onslaught", "ONS");
  }
}

module.exports = SolarBlast;
