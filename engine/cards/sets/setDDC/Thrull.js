"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thrull extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrull", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Thrull;
