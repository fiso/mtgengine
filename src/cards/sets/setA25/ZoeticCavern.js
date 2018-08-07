"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZoeticCavern extends UnimplementedCard {
  constructor (game) {
    super(game, "Zoetic Cavern", "Masters 25", "A25");
  }
}

module.exports = ZoeticCavern;
