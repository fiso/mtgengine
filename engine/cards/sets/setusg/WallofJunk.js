"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofJunk extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Junk", "Urza's Saga", "USG");
  }
}

module.exports = WallofJunk;
