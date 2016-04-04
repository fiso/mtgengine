"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HammerofRuin extends Card {
  constructor(game) {
    super(game, "Hammer of Ruin", "Worldwake", "WWK");
  }
}

module.exports = HammerofRuin;
