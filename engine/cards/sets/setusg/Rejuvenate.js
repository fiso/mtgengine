"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rejuvenate extends Card {
  constructor(game) {
    super(game, "Rejuvenate", "Urza's Saga", "USG");
  }
}

module.exports = Rejuvenate;
