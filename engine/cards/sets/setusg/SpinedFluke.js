"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinedFluke extends Card {
  constructor(game) {
    super(game, "Spined Fluke", "Urza's Saga", "USG");
  }
}

module.exports = SpinedFluke;
