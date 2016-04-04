"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Despondency extends Card {
  constructor(game) {
    super(game, "Despondency", "Urza's Saga", "USG");
  }
}

module.exports = Despondency;
