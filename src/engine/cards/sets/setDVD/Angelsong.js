"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Angelsong extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelsong", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = Angelsong;
