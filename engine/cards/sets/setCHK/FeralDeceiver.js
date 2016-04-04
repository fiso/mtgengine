"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeralDeceiver extends Card {
  constructor(game) {
    super(game, "Feral Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = FeralDeceiver;
