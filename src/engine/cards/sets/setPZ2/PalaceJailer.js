"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceJailer extends UnimplementedCard {
  constructor (game) {
    super(game, "Palace Jailer", "You Make the Cube", "PZ2");
  }
}

module.exports = PalaceJailer;
