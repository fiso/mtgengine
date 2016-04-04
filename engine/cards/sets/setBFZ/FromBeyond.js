"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FromBeyond extends Card {
  constructor(game) {
    super(game, "From Beyond", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FromBeyond;
