"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofGlory extends Card {
  constructor(game) {
    super(game, "Knight of Glory", "Magic 2013", "M13");
  }
}

module.exports = KnightofGlory;
