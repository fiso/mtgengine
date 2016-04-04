"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonWhelp extends Card {
  constructor(game) {
    super(game, "Dragon Whelp", "Archenemy", "ARC");
  }
}

module.exports = DragonWhelp;
