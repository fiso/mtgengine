"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RighteousCause extends Card {
  constructor(game) {
    super(game, "Righteous Cause", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = RighteousCause;
