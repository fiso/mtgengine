"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumingFerocity extends Card {
  constructor(game) {
    super(game, "Consuming Ferocity", "Mirage", "MIR");
  }
}

module.exports = ConsumingFerocity;
