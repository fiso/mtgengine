"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerpentsGift extends Card {
  constructor(game) {
    super(game, "Serpent's Gift", "Magic 2013", "M13");
  }
}

module.exports = SerpentsGift;
