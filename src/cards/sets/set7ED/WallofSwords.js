"use strict";
const Constants = require ("../../../Constants");
const WallofSwordsBase = require("../setM14/WallofSwords");

class WallofSwords extends WallofSwordsBase {
  constructor (game) {
    super(game, "Wall of Swords", "Seventh Edition", "7ED");
  }
}

module.exports = WallofSwords;
