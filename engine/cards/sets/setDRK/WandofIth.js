"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WandofIth extends Card {
  constructor(game) {
    super(game, "Wand of Ith", "The Dark", "DRK");
  }
}

module.exports = WandofIth;
