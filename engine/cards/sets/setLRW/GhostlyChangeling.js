"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyChangeling extends Card {
  constructor(game) {
    super(game, "Ghostly Changeling", "Lorwyn", "LRW");
  }
}

module.exports = GhostlyChangeling;
