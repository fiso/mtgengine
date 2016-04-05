"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WheelofFortune extends UnimplementedCard {
  constructor(game) {
    super(game, "Wheel of Fortune", "Collector's Edition", "CED");
  }
}

module.exports = WheelofFortune;
