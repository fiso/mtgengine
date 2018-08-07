"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmancipationAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Emancipation Angel", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = EmancipationAngel;
