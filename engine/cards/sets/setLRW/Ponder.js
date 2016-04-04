"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ponder extends Card {
  constructor(game) {
    super(game, "Ponder", "Lorwyn", "LRW");
  }
}

module.exports = Ponder;
