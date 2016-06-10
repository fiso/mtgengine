"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofCaltrops extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Caltrops", "Legends", "LEG");
  }
}

module.exports = WallofCaltrops;
