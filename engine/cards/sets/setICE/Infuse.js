"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Infuse extends Card {
  constructor(game) {
    super(game, "Infuse", "Ice Age", "ICE");
  }
}

module.exports = Infuse;
