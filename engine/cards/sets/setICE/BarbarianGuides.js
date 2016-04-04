"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbarianGuides extends Card {
  constructor(game) {
    super(game, "Barbarian Guides", "Ice Age", "ICE");
  }
}

module.exports = BarbarianGuides;
