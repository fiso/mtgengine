"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProtectiveBubble extends Card {
  constructor(game) {
    super(game, "Protective Bubble", "Lorwyn", "LRW");
  }
}

module.exports = ProtectiveBubble;
