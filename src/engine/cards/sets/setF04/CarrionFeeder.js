"use strict";
const Constants = require ("../../../Constants");
const CarrionFeederBase = require("../setEMA/CarrionFeeder");

class CarrionFeeder extends CarrionFeederBase {
  constructor (game) {
    super(game, "Carrion Feeder", "Friday Night Magic 2004", "F04");
  }
}

module.exports = CarrionFeeder;
