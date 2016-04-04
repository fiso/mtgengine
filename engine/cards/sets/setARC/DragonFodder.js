"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonFodder extends Card {
  constructor(game) {
    super(game, "Dragon Fodder", "Archenemy", "ARC");
  }
}

module.exports = DragonFodder;
