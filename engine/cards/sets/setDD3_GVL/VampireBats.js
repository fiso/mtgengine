"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireBats extends Card {
  constructor(game) {
    super(game, "Vampire Bats", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = VampireBats;
