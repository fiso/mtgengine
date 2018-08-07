"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoastalDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Coastal Drake", "Apocalypse", "APC");
  }
}

module.exports = CoastalDrake;
