"use strict";
const Constants = require ("../../../Constants");
const CarrionFeederBase = require("../setDDE/CarrionFeeder");

class CarrionFeeder extends CarrionFeederBase {
  constructor (game) {
    super(game, "Carrion Feeder", "Eternal Masters", "EMA");
  }
}

module.exports = CarrionFeeder;
