"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaperTiger extends Card {
  constructor(game) {
    super(game, "Paper Tiger", "Unglued", "UGL");
  }
}

module.exports = PaperTiger;
