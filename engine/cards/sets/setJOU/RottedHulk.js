"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RottedHulk extends Card {
  constructor(game) {
    super(game, "Rotted Hulk", "Journey into Nyx", "JOU");
  }
}

module.exports = RottedHulk;
