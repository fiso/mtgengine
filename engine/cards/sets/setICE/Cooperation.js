"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cooperation extends Card {
  constructor(game) {
    super(game, "Cooperation", "Ice Age", "ICE");
  }
}

module.exports = Cooperation;
