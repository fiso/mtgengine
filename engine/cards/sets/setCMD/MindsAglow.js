"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindsAglow extends Card {
  constructor(game) {
    super(game, "Minds Aglow", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MindsAglow;
