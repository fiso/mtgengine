"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReclusiveWight extends Card {
  constructor(game) {
    super(game, "Reclusive Wight", "Urza's Saga", "USG");
  }
}

module.exports = ReclusiveWight;
