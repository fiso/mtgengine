"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PromiseofPower extends UnimplementedCard {
  constructor (game) {
    super(game, "Promise of Power", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = PromiseofPower;
