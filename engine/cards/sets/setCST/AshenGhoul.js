"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshenGhoul extends Card {
  constructor(game) {
    super(game, "Ashen Ghoul", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = AshenGhoul;
