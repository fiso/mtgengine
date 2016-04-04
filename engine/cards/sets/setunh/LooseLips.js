"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LooseLips extends Card {
  constructor(game) {
    super(game, "Loose Lips", "Unhinged", "UNH");
  }
}

module.exports = LooseLips;
