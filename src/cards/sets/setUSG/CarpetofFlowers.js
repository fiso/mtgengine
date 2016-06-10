"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarpetofFlowers extends UnimplementedCard {
  constructor (game) {
    super(game, "Carpet of Flowers", "Urza's Saga", "USG");
  }
}

module.exports = CarpetofFlowers;
