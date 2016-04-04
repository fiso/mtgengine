"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aurochs extends Card {
  constructor(game) {
    super(game, "Aurochs", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Aurochs;
