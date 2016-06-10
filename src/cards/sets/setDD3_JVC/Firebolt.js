"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firebolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Firebolt", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Firebolt;
