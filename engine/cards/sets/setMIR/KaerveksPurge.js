"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KaerveksPurge extends Card {
  constructor(game) {
    super(game, "Kaervek's Purge", "Mirage", "MIR");
  }
}

module.exports = KaerveksPurge;
