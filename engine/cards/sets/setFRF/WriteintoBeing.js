"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WriteintoBeing extends Card {
  constructor(game) {
    super(game, "Write into Being", "Fate Reforged", "FRF");
  }
}

module.exports = WriteintoBeing;
