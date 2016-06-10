"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlayeroftheWicked extends UnimplementedCard {
  constructor (game) {
    super(game, "Slayer of the Wicked", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SlayeroftheWicked;
