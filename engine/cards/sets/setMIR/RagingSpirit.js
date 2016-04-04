"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingSpirit extends Card {
  constructor(game) {
    super(game, "Raging Spirit", "Mirage", "MIR");
  }
}

module.exports = RagingSpirit;
