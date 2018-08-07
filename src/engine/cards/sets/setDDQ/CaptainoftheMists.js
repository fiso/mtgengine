"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainoftheMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Captain of the Mists", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CaptainoftheMists;
