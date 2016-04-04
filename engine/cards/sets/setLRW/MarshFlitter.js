"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshFlitter extends Card {
  constructor(game) {
    super(game, "Marsh Flitter", "Lorwyn", "LRW");
  }
}

module.exports = MarshFlitter;
