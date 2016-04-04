"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpringCleaning extends Card {
  constructor(game) {
    super(game, "Spring Cleaning", "Lorwyn", "LRW");
  }
}

module.exports = SpringCleaning;
