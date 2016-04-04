"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheMaelstrom extends Card {
  constructor(game) {
    super(game, "The Maelstrom", "Planechase", "HOP");
  }
}

module.exports = TheMaelstrom;
