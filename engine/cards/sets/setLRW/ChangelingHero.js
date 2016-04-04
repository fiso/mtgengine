"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChangelingHero extends Card {
  constructor(game) {
    super(game, "Changeling Hero", "Lorwyn", "LRW");
  }
}

module.exports = ChangelingHero;
