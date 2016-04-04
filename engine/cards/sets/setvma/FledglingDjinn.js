"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FledglingDjinn extends Card {
  constructor(game) {
    super(game, "Fledgling Djinn", "Vintage Masters", "VMA");
  }
}

module.exports = FledglingDjinn;
