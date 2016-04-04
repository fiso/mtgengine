"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Benthicore extends Card {
  constructor(game) {
    super(game, "Benthicore", "Lorwyn", "LRW");
  }
}

module.exports = Benthicore;
