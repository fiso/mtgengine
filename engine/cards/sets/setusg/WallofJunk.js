"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofJunk extends Card {
  constructor(game) {
    super(game, "Wall of Junk", "Urza's Saga", "USG");
  }
}

module.exports = WallofJunk;
