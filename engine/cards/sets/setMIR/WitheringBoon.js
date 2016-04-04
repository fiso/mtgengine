"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitheringBoon extends Card {
  constructor(game) {
    super(game, "Withering Boon", "Mirage", "MIR");
  }
}

module.exports = WitheringBoon;
