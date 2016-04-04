"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Incinerate extends Card {
  constructor(game) {
    super(game, "Incinerate", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Incinerate;
