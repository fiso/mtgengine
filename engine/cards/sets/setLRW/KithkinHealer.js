"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KithkinHealer extends Card {
  constructor(game) {
    super(game, "Kithkin Healer", "Lorwyn", "LRW");
  }
}

module.exports = KithkinHealer;
