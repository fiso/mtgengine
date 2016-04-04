"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GildedDrake extends Card {
  constructor(game) {
    super(game, "Gilded Drake", "Urza's Saga", "USG");
  }
}

module.exports = GildedDrake;
