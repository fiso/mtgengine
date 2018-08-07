"use strict";
const Constants = require ("../../../Constants");
const CarrionFeederBase = require("../setEMA/CarrionFeeder");

class CarrionFeeder extends CarrionFeederBase {
  constructor (game) {
    super(game, "Carrion Feeder", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = CarrionFeeder;
