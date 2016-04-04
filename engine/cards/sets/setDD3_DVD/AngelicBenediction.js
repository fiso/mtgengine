"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicBenediction extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Benediction", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelicBenediction;
