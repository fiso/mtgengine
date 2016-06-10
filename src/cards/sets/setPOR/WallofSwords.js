"use strict";
const Constants = require ("../../../Constants");
const WallofSwordsBase = require("../set6ED/WallofSwords");

class WallofSwords extends WallofSwordsBase {
  constructor (game) {
    super(game, "Wall of Swords", "Portal", "POR");
  }
}

module.exports = WallofSwords;
