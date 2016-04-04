"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gamble extends Card {
  constructor(game) {
    super(game, "Gamble", "Urza's Saga", "USG");
  }
}

module.exports = Gamble;
