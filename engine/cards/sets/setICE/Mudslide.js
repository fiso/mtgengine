"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mudslide extends Card {
  constructor(game) {
    super(game, "Mudslide", "Ice Age", "ICE");
  }
}

module.exports = Mudslide;
