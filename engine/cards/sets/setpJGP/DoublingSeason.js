"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoublingSeason extends Card {
  constructor(game) {
    super(game, "Doubling Season", "Judge Gift Program", "pJGP");
  }
}

module.exports = DoublingSeason;
