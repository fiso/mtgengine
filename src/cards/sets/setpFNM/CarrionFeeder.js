"use strict";
const Constants = require ("../../../Constants");
const CarrionFeederBase = require("../setDDE/CarrionFeeder");

class CarrionFeeder extends CarrionFeederBase {
  constructor (game) {
    super(game, "Carrion Feeder", "Friday Night Magic", "pFNM");
  }
}

module.exports = CarrionFeeder;
