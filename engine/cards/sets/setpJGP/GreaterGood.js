"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterGood extends Card {
  constructor(game) {
    super(game, "Greater Good", "Judge Gift Program", "pJGP");
  }
}

module.exports = GreaterGood;
