"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrazedGoblin extends Card {
  constructor(game) {
    super(game, "Crazed Goblin", "Darksteel", "DST");
  }
}

module.exports = CrazedGoblin;
