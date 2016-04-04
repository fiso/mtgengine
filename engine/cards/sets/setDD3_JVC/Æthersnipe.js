"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Æthersnipe extends UnimplementedCard {
  constructor(game) {
    super(game, "Æthersnipe", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Æthersnipe;
