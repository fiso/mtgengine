"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Corpsehatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Corpsehatch", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Corpsehatch;
