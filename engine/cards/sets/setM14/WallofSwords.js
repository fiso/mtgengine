"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofSwordsBase = require("../set6ED/WallofSwords.js");

class WallofSwords extends WallofSwordsBase {
  constructor(game) {
    super(game, "Wall of Swords", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WallofSwords;
