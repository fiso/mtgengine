"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PunishingFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Punishing Fire", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = PunishingFire;
