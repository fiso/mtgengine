"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoorlandInquisitor extends Card {
  constructor(game) {
    super(game, "Moorland Inquisitor", "Avacyn Restored", "AVR");
  }
}

module.exports = MoorlandInquisitor;
