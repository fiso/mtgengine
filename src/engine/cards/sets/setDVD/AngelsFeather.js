"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsFeather extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel's Feather", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = AngelsFeather;
