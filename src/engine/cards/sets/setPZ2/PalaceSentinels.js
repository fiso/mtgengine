"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceSentinels extends UnimplementedCard {
  constructor (game) {
    super(game, "Palace Sentinels", "You Make the Cube", "PZ2");
  }
}

module.exports = PalaceSentinels;
