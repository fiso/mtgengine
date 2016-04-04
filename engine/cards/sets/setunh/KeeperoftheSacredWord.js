"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeperoftheSacredWord extends Card {
  constructor(game) {
    super(game, "Keeper of the Sacred Word", "Unhinged", "UNH");
  }
}

module.exports = KeeperoftheSacredWord;
