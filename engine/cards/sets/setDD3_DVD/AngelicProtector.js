"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicProtector extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Protector", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelicProtector;
