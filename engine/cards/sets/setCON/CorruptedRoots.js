"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptedRoots extends Card {
  constructor(game) {
    super(game, "Corrupted Roots", "Conflux", "CON");
  }
}

module.exports = CorruptedRoots;
