"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnstableHulk extends Card {
  constructor(game) {
    super(game, "Unstable Hulk", "Legions", "LGN");
  }
}

module.exports = UnstableHulk;
