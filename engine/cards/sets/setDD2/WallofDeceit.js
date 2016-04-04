"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofDeceitBase = require("../setDD3_JVC/WallofDeceit.js");

class WallofDeceit extends WallofDeceitBase {
  constructor(game) {
    super(game, "Wall of Deceit", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = WallofDeceit;
