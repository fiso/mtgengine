"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireBats extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire Bats", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = VampireBats;
