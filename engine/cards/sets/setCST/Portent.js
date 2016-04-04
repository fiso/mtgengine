"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Portent extends Card {
  constructor(game) {
    super(game, "Portent", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Portent;
