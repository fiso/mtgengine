"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedBat extends UnimplementedCard {
  constructor (game) {
    super(game, "Blighted Bat", "Amonkhet", "AKH");
  }
}

module.exports = BlightedBat;
