"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousCause extends UnimplementedCard {
  constructor(game) {
    super(game, "Righteous Cause", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = RighteousCause;
