"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NosyGoblin extends Card {
  constructor(game) {
    super(game, "Nosy Goblin", "Onslaught", "ONS");
  }
}

module.exports = NosyGoblin;
