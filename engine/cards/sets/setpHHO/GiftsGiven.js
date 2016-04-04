"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftsGiven extends Card {
  constructor(game) {
    super(game, "Gifts Given", "Happy Holidays", "pHHO");
  }
}

module.exports = GiftsGiven;
