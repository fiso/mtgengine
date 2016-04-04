"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BraidwoodCup extends Card {
  constructor(game) {
    super(game, "Braidwood Cup", "Urza's Destiny", "UDS");
  }
}

module.exports = BraidwoodCup;
