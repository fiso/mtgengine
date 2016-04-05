"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Tolarian Drake", "Weatherlight", "WTH");
  }
}

module.exports = TolarianDrake;
