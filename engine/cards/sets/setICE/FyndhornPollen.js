"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FyndhornPollen extends Card {
  constructor(game) {
    super(game, "Fyndhorn Pollen", "Ice Age", "ICE");
  }
}

module.exports = FyndhornPollen;
