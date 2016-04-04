"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheFuture extends Card {
  constructor(game) {
    super(game, "Magus of the Future", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheFuture;
