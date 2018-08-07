"use strict";
const Constants = require ("../../../Constants");
const CarrionFeederBase = require("../setEMA/CarrionFeeder");

class CarrionFeeder extends CarrionFeederBase {
  constructor (game) {
    super(game, "Carrion Feeder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = CarrionFeeder;
