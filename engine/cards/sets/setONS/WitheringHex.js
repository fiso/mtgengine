"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitheringHex extends Card {
  constructor(game) {
    super(game, "Withering Hex", "Onslaught", "ONS");
  }
}

module.exports = WitheringHex;
