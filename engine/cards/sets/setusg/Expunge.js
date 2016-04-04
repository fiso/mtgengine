"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Expunge extends Card {
  constructor(game) {
    super(game, "Expunge", "Urza's Saga", "USG");
  }
}

module.exports = Expunge;
