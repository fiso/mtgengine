"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishLumberjack extends Card {
  constructor(game) {
    super(game, "Orcish Lumberjack", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = OrcishLumberjack;
