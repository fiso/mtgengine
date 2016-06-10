"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalarasBane extends UnimplementedCard {
  constructor (game) {
    super(game, "Talara's Bane", "Eventide", "EVE");
  }
}

module.exports = TalarasBane;
