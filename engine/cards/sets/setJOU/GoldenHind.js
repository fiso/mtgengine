"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldenHind extends Card {
  constructor(game) {
    super(game, "Golden Hind", "Journey into Nyx", "JOU");
  }
}

module.exports = GoldenHind;
