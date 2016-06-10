"use strict";
const Constants = require ("../../../Constants");
const WallofDeceitBase = require("../setDD3_JVC/WallofDeceit");

class WallofDeceit extends WallofDeceitBase {
  constructor (game) {
    super(game, "Wall of Deceit", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = WallofDeceit;
