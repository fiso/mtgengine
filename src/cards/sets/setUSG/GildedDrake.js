"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Gilded Drake", "Urza's Saga", "USG");
  }
}

module.exports = GildedDrake;
