"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowDevil extends Card {
  constructor(game) {
    super(game, "Snow Devil", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = SnowDevil;
