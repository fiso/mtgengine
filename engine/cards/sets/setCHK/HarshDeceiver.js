"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarshDeceiver extends Card {
  constructor(game) {
    super(game, "Harsh Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HarshDeceiver;
