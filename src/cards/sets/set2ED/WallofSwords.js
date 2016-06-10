"use strict";
const Constants = require ("../../../Constants");
const WallofSwordsBase = require("../set6ED/WallofSwords");

class WallofSwords extends WallofSwordsBase {
  constructor (game) {
    super(game, "Wall of Swords", "Unlimited Edition", "2ED");
  }
}

module.exports = WallofSwords;
