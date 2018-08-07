"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofFortune extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Fortune", "Unstable", "UST");
  }
}

module.exports = WallofFortune;
