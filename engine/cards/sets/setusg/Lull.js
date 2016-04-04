"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lull extends Card {
  constructor(game) {
    super(game, "Lull", "Urza's Saga", "USG");
  }
}

module.exports = Lull;
