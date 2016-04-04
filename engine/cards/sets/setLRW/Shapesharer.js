"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shapesharer extends Card {
  constructor(game) {
    super(game, "Shapesharer", "Lorwyn", "LRW");
  }
}

module.exports = Shapesharer;
