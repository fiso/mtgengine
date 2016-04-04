"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LairwatchGiant extends Card {
  constructor(game) {
    super(game, "Lairwatch Giant", "Lorwyn", "LRW");
  }
}

module.exports = LairwatchGiant;
