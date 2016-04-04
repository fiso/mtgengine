"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimMonolith extends Card {
  constructor(game) {
    super(game, "Grim Monolith", "Urza's Legacy", "ULG");
  }
}

module.exports = GrimMonolith;
