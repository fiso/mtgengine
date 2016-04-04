"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Genesis extends Card {
  constructor(game) {
    super(game, "Genesis", "Judge Gift Program", "pJGP");
  }
}

module.exports = Genesis;
