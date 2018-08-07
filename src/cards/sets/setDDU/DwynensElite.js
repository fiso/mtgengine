"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwynensElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwynen's Elite", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = DwynensElite;
