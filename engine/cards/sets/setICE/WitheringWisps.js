"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitheringWisps extends Card {
  constructor(game) {
    super(game, "Withering Wisps", "Ice Age", "ICE");
  }
}

module.exports = WitheringWisps;
