"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Tutor", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = DemonicTutor;
