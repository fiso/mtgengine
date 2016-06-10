"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashen Ghoul", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = AshenGhoul;
