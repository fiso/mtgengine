"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianShaman extends Card {
  constructor(game) {
    super(game, "Balduvian Shaman", "Ice Age", "ICE");
  }
}

module.exports = BalduvianShaman;
