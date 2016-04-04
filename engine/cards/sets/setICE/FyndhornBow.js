"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FyndhornBow extends Card {
  constructor(game) {
    super(game, "Fyndhorn Bow", "Ice Age", "ICE");
  }
}

module.exports = FyndhornBow;
