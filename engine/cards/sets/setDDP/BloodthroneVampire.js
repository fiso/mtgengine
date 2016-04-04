"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodthroneVampire extends Card {
  constructor(game) {
    super(game, "Bloodthrone Vampire", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = BloodthroneVampire;
