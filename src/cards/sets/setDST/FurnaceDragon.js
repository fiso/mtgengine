"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Furnace Dragon", "Darksteel", "DST");
  }
}

module.exports = FurnaceDragon;
