"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Morphling extends Card {
  constructor(game) {
    super(game, "Morphling", "Judge Gift Program", "pJGP");
  }
}

module.exports = Morphling;
