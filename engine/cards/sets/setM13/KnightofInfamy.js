"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofInfamy extends Card {
  constructor(game) {
    super(game, "Knight of Infamy", "Magic 2013", "M13");
  }
}

module.exports = KnightofInfamy;
