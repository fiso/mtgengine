"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Memnarch extends Card {
  constructor(game) {
    super(game, "Memnarch", "Archenemy", "ARC");
  }
}

module.exports = Memnarch;
