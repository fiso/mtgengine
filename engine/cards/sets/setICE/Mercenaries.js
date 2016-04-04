"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mercenaries extends Card {
  constructor(game) {
    super(game, "Mercenaries", "Ice Age", "ICE");
  }
}

module.exports = Mercenaries;
