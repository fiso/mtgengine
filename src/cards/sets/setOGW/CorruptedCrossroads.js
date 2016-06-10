"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedCrossroads extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupted Crossroads", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CorruptedCrossroads;
