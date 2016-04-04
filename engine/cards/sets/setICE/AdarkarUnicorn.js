"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdarkarUnicorn extends Card {
  constructor(game) {
    super(game, "Adarkar Unicorn", "Ice Age", "ICE");
  }
}

module.exports = AdarkarUnicorn;
