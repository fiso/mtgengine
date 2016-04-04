"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Intuition extends Card {
  constructor(game) {
    super(game, "Intuition", "Judge Gift Program", "pJGP");
  }
}

module.exports = Intuition;
