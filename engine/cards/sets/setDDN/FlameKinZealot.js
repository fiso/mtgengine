"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameKinZealot extends UnimplementedCard {
  constructor(game) {
    super(game, "Flame-Kin Zealot", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FlameKinZealot;
