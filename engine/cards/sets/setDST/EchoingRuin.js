"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EchoingRuin extends Card {
  constructor(game) {
    super(game, "Echoing Ruin", "Darksteel", "DST");
  }
}

module.exports = EchoingRuin;
