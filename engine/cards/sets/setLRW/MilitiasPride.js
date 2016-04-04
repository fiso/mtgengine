"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MilitiasPride extends Card {
  constructor(game) {
    super(game, "Militia's Pride", "Lorwyn", "LRW");
  }
}

module.exports = MilitiasPride;
