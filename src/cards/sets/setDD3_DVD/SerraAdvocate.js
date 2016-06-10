"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Advocate", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerraAdvocate;
