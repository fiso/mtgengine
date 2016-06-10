"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Palace Siege", "Fate Reforged", "FRF");
  }
}

module.exports = PalaceSiege;
