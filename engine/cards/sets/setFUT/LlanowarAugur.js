"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LlanowarAugur extends Card {
  constructor(game) {
    super(game, "Llanowar Augur", "Future Sight", "FUT");
  }
}

module.exports = LlanowarAugur;
