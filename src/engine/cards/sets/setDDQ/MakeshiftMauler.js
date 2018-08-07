"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeshiftMauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Makeshift Mauler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MakeshiftMauler;
