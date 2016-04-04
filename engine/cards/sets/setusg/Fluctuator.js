"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fluctuator extends Card {
  constructor(game) {
    super(game, "Fluctuator", "Urza's Saga", "USG");
  }
}

module.exports = Fluctuator;
