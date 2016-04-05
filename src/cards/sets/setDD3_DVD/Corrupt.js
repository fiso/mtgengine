"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Corrupt extends UnimplementedCard {
  constructor(game) {
    super(game, "Corrupt", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Corrupt;
