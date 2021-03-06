"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OvereagerApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Overeager Apprentice", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = OvereagerApprentice;
