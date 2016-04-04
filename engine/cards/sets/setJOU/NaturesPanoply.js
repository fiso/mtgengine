"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesPanoply extends Card {
  constructor(game) {
    super(game, "Nature's Panoply", "Journey into Nyx", "JOU");
  }
}

module.exports = NaturesPanoply;
