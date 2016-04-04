"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeadlongRush extends Card {
  constructor(game) {
    super(game, "Headlong Rush", "Urza's Saga", "USG");
  }
}

module.exports = HeadlongRush;
