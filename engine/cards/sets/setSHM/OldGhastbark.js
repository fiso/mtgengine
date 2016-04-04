"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OldGhastbark extends Card {
  constructor(game) {
    super(game, "Old Ghastbark", "Shadowmoor", "SHM");
  }
}

module.exports = OldGhastbark;
