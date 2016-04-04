"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KaervektheMerciless extends Card {
  constructor(game) {
    super(game, "Kaervek the Merciless", "Archenemy", "ARC");
  }
}

module.exports = KaervektheMerciless;
