"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionFeeder extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Feeder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = CarrionFeeder;
