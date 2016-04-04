"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Purify extends Card {
  constructor(game) {
    super(game, "Purify", "Seventh Edition", "7ED");
  }
}

module.exports = Purify;
