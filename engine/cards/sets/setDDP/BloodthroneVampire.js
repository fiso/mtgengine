"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodthroneVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodthrone Vampire", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = BloodthroneVampire;
