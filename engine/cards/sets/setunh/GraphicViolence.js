"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraphicViolence extends Card {
  constructor(game) {
    super(game, "Graphic Violence", "Unhinged", "UNH");
  }
}

module.exports = GraphicViolence;
