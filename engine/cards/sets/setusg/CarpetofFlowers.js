"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarpetofFlowers extends Card {
  constructor(game) {
    super(game, "Carpet of Flowers", "Urza's Saga", "USG");
  }
}

module.exports = CarpetofFlowers;
