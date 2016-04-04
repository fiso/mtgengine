"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FateTransfer extends Card {
  constructor(game) {
    super(game, "Fate Transfer", "Shadowmoor", "SHM");
  }
}

module.exports = FateTransfer;
