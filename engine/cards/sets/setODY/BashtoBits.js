"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BashtoBits extends Card {
  constructor(game) {
    super(game, "Bash to Bits", "Odyssey", "ODY");
  }
}

module.exports = BashtoBits;
