"use strict";
const Constants = require ("../../../Constants");
const WallofSwordsBase = require("../set6ED/WallofSwords");

class WallofSwords extends WallofSwordsBase {
  constructor(game) {
    super(game, "Wall of Swords", "Collector's Edition", "CED");
  }
}

module.exports = WallofSwords;
